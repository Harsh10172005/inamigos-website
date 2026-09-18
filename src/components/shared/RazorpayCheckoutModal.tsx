'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { 
  X, 
  ShieldCheck, 
  Lock, 
  Smartphone, 
  CreditCard, 
  Building2, 
  Wallet, 
  CheckCircle2, 
  Loader2, 
  Heart,
  ArrowRight
} from "lucide-react";
import { RuPayIcon } from "@/components/ui/PaymentIcons";
import { generateRazorpayPaymentId, generateRazorpayOrderId } from "@/lib/razorpay";
import { formatCurrency } from "@/lib/utils";

interface RazorpayCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
  purpose: string;
  donorName: string;
  email: string;
  phone?: string;
  onSuccess: (response: {
    razorpay_payment_id: string;
    razorpay_order_id: string;
    payment_method: string;
  }) => void;
}

export const RazorpayCheckoutModal: React.FC<RazorpayCheckoutModalProps> = ({
  isOpen,
  onClose,
  amount,
  purpose,
  donorName,
  email,
  phone = "9876543210",
  onSuccess
}) => {
  const [activeTab, setActiveTab] = useState<"upi" | "card" | "netbanking" | "wallet">("upi");
  const [upiMode, setUpiMode] = useState<"qr" | "vpa">("qr");
  const [vpa, setVpa] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [selectedBank, setSelectedBank] = useState("HDFC Bank");
  const [selectedWallet, setSelectedWallet] = useState("PhonePe");
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStatus, setProcessingStatus] = useState("");
  const [timeLeft, setTimeLeft] = useState(300); // 5 min countdown for QR

  useEffect(() => {
    if (!isOpen) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 300));
    }, 1000);
    return () => clearInterval(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handlePay = () => {
    setIsProcessing(true);
    setProcessingStatus("Connecting to Razorpay Banking Gateway...");

    setTimeout(() => {
      setProcessingStatus("Authorizing transaction with bank...");
    }, 600);

    setTimeout(() => {
      setIsProcessing(false);
      const paymentId = generateRazorpayPaymentId();
      const orderId = generateRazorpayOrderId();
      
      let methodLabel = "Razorpay UPI";
      if (activeTab === "card") methodLabel = "Razorpay Card (Visa/Master/RuPay)";
      if (activeTab === "netbanking") methodLabel = `Razorpay NetBanking (${selectedBank})`;
      if (activeTab === "wallet") methodLabel = `Razorpay Wallet (${selectedWallet})`;

      onSuccess({
        razorpay_payment_id: paymentId,
        razorpay_order_id: orderId,
        payment_method: methodLabel
      });
    }, 1300);
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, "").slice(0, 16);
    const formatted = raw.match(/.{1,4}/g)?.join(" ") || raw;
    setCardNumber(formatted);
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/[^0-9]/g, "").slice(0, 4);
    if (val.length >= 2) {
      val = val.slice(0, 2) + "/" + val.slice(2);
    }
    setCardExpiry(val);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl shadow-2xl w-full max-w-xl overflow-hidden border border-slate-200 relative flex flex-col max-h-[92vh]"
        role="dialog"
        aria-modal="true"
        aria-label="Razorpay Checkout"
      >
        {/* Razorpay Authentic Header */}
        <div className="bg-[#0C2340] text-white p-5 sm:p-6 relative">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white p-1 border border-white/20 flex items-center justify-center shrink-0 shadow-sm">
                <Image 
                  src="/images/inamigos-emblem.png" 
                  alt="InAmigos Foundation" 
                  width={34} 
                  height={34} 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm sm:text-base font-extrabold tracking-tight">InAmigos Foundation</h3>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
                </div>
                <p className="text-[11px] text-slate-300 font-medium truncate max-w-[240px] sm:max-w-xs">
                  {purpose}
                </p>
                <p className="text-[10px] text-slate-400 font-mono mt-0.5 truncate max-w-[240px] sm:max-w-xs">
                  {donorName} • {email} {phone ? `• ${phone}` : ''}
                </p>
              </div>
            </div>

            <div className="text-right flex items-center gap-3">
              <div>
                <span className="text-[10px] text-slate-300 uppercase tracking-wider font-semibold block">Total Amount</span>
                <span className="text-lg sm:text-2xl font-black text-white">{formatCurrency(amount)}</span>
              </div>
              <button
                type="button"
                onClick={onClose}
                disabled={isProcessing}
                className="p-1.5 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                aria-label="Close Razorpay checkout"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Trust Banner */}
          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300">
            <div className="flex items-center gap-1.5">
              <Lock className="w-3 h-3 text-emerald-400" />
              <span>Razorpay Trusted Business • 256-Bit SSL</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-sky-500/20 text-sky-300 px-2 py-0.5 rounded font-mono font-bold text-[10px] border border-sky-400/30">
                SANDBOX / TEST MODE
              </span>
            </div>
          </div>
        </div>

        {/* Modal Body: Split Navigation & Payment Content */}
        <div className="grid grid-cols-1 sm:grid-cols-12 flex-1 overflow-y-auto">
          {/* Left Navigation: Payment Modes */}
          <div className="sm:col-span-4 bg-slate-50 border-r border-slate-200 p-2 sm:p-3 flex sm:flex-col gap-1 overflow-x-auto sm:overflow-x-visible">
            <button
              type="button"
              onClick={() => setActiveTab("upi")}
              className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-left text-xs font-bold transition-all shrink-0 sm:shrink ${
                activeTab === "upi"
                  ? "bg-white text-[#0C2340] shadow-sm border border-slate-200 text-sky-700"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <Smartphone className="w-4 h-4 text-emerald-600" />
              <div className="flex-1">
                <span>UPI / QR</span>
                <span className="block text-[10px] text-slate-400 font-normal hidden sm:block">Google Pay, PhonePe</span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("card")}
              className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-left text-xs font-bold transition-all shrink-0 sm:shrink ${
                activeTab === "card"
                  ? "bg-white text-[#0C2340] shadow-sm border border-slate-200 text-sky-700"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <CreditCard className="w-4 h-4 text-sky-600" />
              <div className="flex-1">
                <span>Cards</span>
                <span className="block text-[10px] text-slate-400 font-normal hidden sm:block">Visa, RuPay, Master</span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("netbanking")}
              className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-left text-xs font-bold transition-all shrink-0 sm:shrink ${
                activeTab === "netbanking"
                  ? "bg-white text-[#0C2340] shadow-sm border border-slate-200 text-sky-700"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <Building2 className="w-4 h-4 text-indigo-600" />
              <div className="flex-1">
                <span>Netbanking</span>
                <span className="block text-[10px] text-slate-400 font-normal hidden sm:block">All Indian Banks</span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("wallet")}
              className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-left text-xs font-bold transition-all shrink-0 sm:shrink ${
                activeTab === "wallet"
                  ? "bg-white text-[#0C2340] shadow-sm border border-slate-200 text-sky-700"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <Wallet className="w-4 h-4 text-amber-600" />
              <div className="flex-1">
                <span>Wallets</span>
                <span className="block text-[10px] text-slate-400 font-normal hidden sm:block">Paytm, PhonePe</span>
              </div>
            </button>
          </div>

          {/* Right Panel: Active Payment Mode Content */}
          <div className="sm:col-span-8 p-5 sm:p-6 bg-white flex flex-col justify-between">
            {/* 1. UPI Tab */}
            {activeTab === "upi" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-xs font-bold text-slate-700">UPI Payment</span>
                  <div className="flex gap-1.5">
                    <button
                      type="button"
                      onClick={() => setUpiMode("qr")}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all ${
                        upiMode === "qr"
                          ? "bg-sky-600 text-white"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      Scan QR
                    </button>
                    <button
                      type="button"
                      onClick={() => setUpiMode("vpa")}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all ${
                        upiMode === "vpa"
                          ? "bg-sky-600 text-white"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      UPI ID
                    </button>
                  </div>
                </div>

                {upiMode === "qr" ? (
                  <div className="text-center py-2 space-y-3">
                    {/* Simulated High-Res Dynamic QR */}
                    <div className="inline-block p-3 bg-white border-2 border-slate-900 rounded-2xl shadow-sm relative group">
                      <div className="w-36 h-36 bg-slate-900 rounded-lg p-2.5 flex flex-col items-center justify-center text-white relative">
                        {/* Authentic QR Grid Pattern Simulation */}
                        <div className="grid grid-cols-6 gap-1 w-full h-full opacity-90">
                          {Array.from({ length: 36 }).map((_, i) => (
                            <div 
                              key={i} 
                              className={`rounded-xs ${
                                (i % 2 === 0 || i % 7 === 0 || i < 6 || i % 6 === 0) 
                                  ? "bg-white" 
                                  : "bg-transparent"
                              }`} 
                            />
                          ))}
                        </div>
                        {/* Center InAmigos Badge */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-9 h-9 rounded-xl bg-emerald-600 border-2 border-white flex items-center justify-center shadow-md">
                            <Heart className="w-4 h-4 fill-white text-white" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <p className="text-xs font-bold text-slate-800">
                        Scan with any UPI App
                      </p>
                      <p className="text-[11px] text-slate-500">
                        Google Pay • PhonePe • Paytm • BHIM • CRED
                      </p>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-[10px] text-amber-800 font-mono font-bold">
                        <span>QR expires in:</span>
                        <span>{formatTimer(timeLeft)}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3 py-1">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Enter UPI Virtual Payment Address (VPA)
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          value={vpa}
                          onChange={(e) => setVpa(e.target.value)}
                          placeholder="e.g. mobile@upi or name@okhdfcbank"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-sky-500 font-mono"
                        />
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                        Quick Handles
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {["@okhdfcbank", "@paytm", "@ybl", "@oksbi", "@icici"].map((h) => (
                          <button
                            key={h}
                            type="button"
                            onClick={() => setVpa((prev) => (prev ? prev.split("@")[0] + h : `donor${h}`))}
                            className="px-2 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-[11px] font-mono text-slate-700 transition-colors"
                          >
                            {h}
                          </button>
                        ))}
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      A payment request of <strong>{formatCurrency(amount)}</strong> will be sent to your UPI app for 1-click confirmation.
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* 2. Cards Tab */}
            {activeTab === "card" && (
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-1 border-b border-slate-100">
                  <span className="text-xs font-bold text-slate-700">Debit or Credit Card</span>
                  <div className="flex items-center gap-1">
                    <RuPayIcon className="h-3.5" />
                    <span className="text-[10px] font-bold text-slate-400">Visa / Master</span>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Card Number</label>
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    placeholder="4123 •••• •••• 1234"
                    maxLength={19}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm font-mono focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">Expiry (MM/YY)</label>
                    <input
                      type="text"
                      value={cardExpiry}
                      onChange={handleExpiryChange}
                      placeholder="12/28"
                      maxLength={5}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm font-mono focus:outline-none focus:border-sky-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">CVV</label>
                    <input
                      type="password"
                      value={cardCvv}
                      onChange={(e) => setCardCvv(e.target.value.replace(/[^0-9]/g, "").slice(0, 4))}
                      placeholder="•••"
                      maxLength={4}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm font-mono focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                <p className="text-[10px] text-slate-400">
                  Card details are processed through Razorpay PCI-DSS Level 1 tokenized vaults. No card info is stored on our servers.
                </p>
              </div>
            )}

            {/* 3. Netbanking Tab */}
            {activeTab === "netbanking" && (
              <div className="space-y-3">
                <span className="text-xs font-bold text-slate-700 block pb-1 border-b border-slate-100">
                  Select Your Bank
                </span>

                <div className="grid grid-cols-2 gap-2">
                  {["HDFC Bank", "ICICI Bank", "State Bank of India", "Axis Bank", "Kotak Bank", "Punjab National Bank"].map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setSelectedBank(b)}
                      className={`p-2.5 rounded-xl border text-left text-xs font-bold transition-all ${
                        selectedBank === b
                          ? "border-sky-600 bg-sky-50/60 text-sky-800"
                          : "border-slate-200 hover:border-slate-300 text-slate-700"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>

                <p className="text-[10px] text-slate-400">
                  You will be securely redirected to {selectedBank}&apos;s retail netbanking portal for authentication.
                </p>
              </div>
            )}

            {/* 4. Wallets Tab */}
            {activeTab === "wallet" && (
              <div className="space-y-3">
                <span className="text-xs font-bold text-slate-700 block pb-1 border-b border-slate-100">
                  Select Mobile Wallet
                </span>

                <div className="grid grid-cols-2 gap-2">
                  {["PhonePe", "Paytm Wallet", "Amazon Pay", "MobiKwik"].map((w) => (
                    <button
                      key={w}
                      type="button"
                      onClick={() => setSelectedWallet(w)}
                      className={`p-3 rounded-xl border text-left text-xs font-bold transition-all ${
                        selectedWallet === w
                          ? "border-sky-600 bg-sky-50/60 text-sky-800"
                          : "border-slate-200 hover:border-slate-300 text-slate-700"
                      }`}
                    >
                      {w}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Pay Button Action */}
            <div className="mt-5 pt-3 border-t border-slate-100 space-y-2.5">
              <button
                type="button"
                onClick={handlePay}
                disabled={isProcessing}
                className="w-full py-3 px-4 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-extrabold text-xs sm:text-sm shadow-md shadow-sky-600/25 flex items-center justify-center gap-2 transition-all disabled:opacity-60 cursor-pointer"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>{processingStatus || "Authorizing Payment..."}</span>
                  </>
                ) : (
                  <>
                    <span>Pay {formatCurrency(amount)}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Secured by Razorpay • Instant Section 80G Tax Receipt</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
