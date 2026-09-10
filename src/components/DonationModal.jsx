import React, { useState } from 'react';
import { X, Heart, CheckCircle2, ShieldCheck, ArrowRight, Sparkles, Receipt } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DonationModal({ isOpen, onClose, initialAmount = 500 }) {
  const [selectedAmount, setSelectedAmount] = useState(initialAmount);
  const [customAmount, setCustomAmount] = useState('');
  const [isCustom, setIsCustom] = useState(false);
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const currentAmount = isCustom ? parseInt(customAmount || '0') : selectedAmount;
  const calculatedMeals = Math.max(1, Math.floor(currentAmount / 50));

  const handleProceed = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setIsSuccess(true);
    }
  };

  const handleClose = () => {
    setStep(1);
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 select-none">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="absolute inset-0 bg-brand-dark/70 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="relative w-full max-w-lg rounded-3xl bg-white border border-brand-dark/10 shadow-2xl overflow-hidden z-10 p-6 sm:p-8 space-y-6"
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-brand-dark/5 hover:bg-brand-dark/10 text-brand-dark transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSuccess ? (
            <>
              {/* Header */}
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-[10px] font-black uppercase tracking-widest">
                  <Heart className="w-3 h-3 fill-brand-orange" />
                  <span>Direct Ground Impact</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-brand-dark uppercase tracking-tight">
                  {step === 1 ? "Choose Donation Amount" : "Confirm Impact & Proceed"}
                </h2>
                <p className="text-xs text-brand-dark/70 font-semibold">
                  100% reaches the ground • 0% platform fee • Instant 80G tax receipt
                </p>
              </div>

              {step === 1 ? (
                /* Step 1: Choose Amount */
                <div className="space-y-5">
                  <div className="grid grid-cols-4 gap-2">
                    {[100, 500, 1000, 2500].map((amt) => {
                      const active = !isCustom && selectedAmount === amt;
                      return (
                        <button
                          key={amt}
                          onClick={() => { setSelectedAmount(amt); setIsCustom(false); }}
                          className={`py-3.5 px-2 rounded-xl text-xs font-black uppercase transition-all border cursor-pointer ${
                            active 
                              ? 'bg-brand-dark text-white border-brand-dark shadow-md' 
                              : 'bg-[#FDFBF7] text-brand-dark border-brand-dark/10 hover:border-brand-orange'
                          }`}
                        >
                          ₹{amt.toLocaleString('en-IN')}
                        </button>
                      );
                    })}
                  </div>

                  {/* Custom Option */}
                  <div>
                    <button
                      onClick={() => setIsCustom(!isCustom)}
                      className="text-xs font-black uppercase tracking-wider text-brand-orange hover:underline cursor-pointer"
                    >
                      {isCustom ? "← Choose preset amount" : "+ Enter custom amount"}
                    </button>

                    {isCustom && (
                      <div className="pt-2">
                        <div className="relative">
                          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-black text-brand-dark text-sm">₹</span>
                          <input
                            type="number"
                            value={customAmount}
                            onChange={(e) => setCustomAmount(e.target.value)}
                            placeholder="Enter amount (e.g. 5000)"
                            className="w-full pl-8 pr-4 py-3 rounded-xl border border-brand-dark/20 text-sm font-bold text-brand-dark focus:outline-none focus:border-brand-orange"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Impact Summary Reaction Box */}
                  <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-brand-dark flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-brand-orange text-white flex items-center justify-center font-black text-sm shadow-sm shrink-0">
                        {calculatedMeals}
                      </div>
                      <div>
                        <div className="font-black text-brand-dark text-sm">
                          {calculatedMeals} Nutritious Meals Provided
                        </div>
                        <div className="text-[11px] text-brand-dark/60 font-semibold">Directly to ground school children</div>
                      </div>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  </div>
                </div>
              ) : (
                /* Step 2: Confirm Details */
                <div className="space-y-4 text-xs font-medium text-brand-dark/80">
                  <div className="p-4 rounded-2xl bg-[#FDFBF7] border border-brand-dark/10 space-y-2">
                    <div className="flex justify-between border-b border-brand-dark/5 pb-2 font-bold">
                      <span>Donation Amount:</span>
                      <span className="text-brand-dark font-black text-sm">₹{currentAmount.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between border-b border-brand-dark/5 pb-2">
                      <span>Platform Fee (0%):</span>
                      <span className="text-emerald-600 font-bold">₹0.00 (100% Impact)</span>
                    </div>
                    <div className="flex justify-between border-b border-brand-dark/5 pb-2">
                      <span>Verified Outcome:</span>
                      <span className="text-brand-orange font-bold">{calculatedMeals} Warm Meals</span>
                    </div>
                    <div className="flex justify-between pt-1">
                      <span>Tax Exemption:</span>
                      <span className="text-emerald-600 font-bold">Instant 80G Receipt</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-800 font-semibold flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Processed via secure PCI-DSS bank disbursal gateway</span>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-2">
                {step === 2 && (
                  <button
                    onClick={() => setStep(1)}
                    className="px-5 py-3.5 rounded-xl border border-brand-dark/10 font-bold text-xs uppercase tracking-wider text-brand-dark hover:bg-brand-dark/5"
                  >
                    Back
                  </button>
                )}
                <button
                  onClick={handleProceed}
                  className="flex-1 py-4 rounded-2xl bg-brand-orange hover:bg-brand-dark text-white font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-xl shadow-brand-orange/30 cursor-pointer"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>{step === 1 ? `Proceed with ₹${currentAmount.toLocaleString('en-IN')}` : "Complete Donation"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </>
          ) : (
            /* Success State */
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-black text-brand-dark uppercase tracking-tight">
                  Thank You for Your Generosity!
                </h3>
                <p className="text-xs text-brand-dark/70 font-semibold">
                  Your donation of <strong>₹{currentAmount.toLocaleString('en-IN')}</strong> has been routed. Your instant 80G tax receipt is being generated.
                </p>
              </div>
              <button
                onClick={handleClose}
                className="w-full py-3.5 rounded-2xl bg-brand-dark text-white font-extrabold text-xs uppercase tracking-wider shadow-md cursor-pointer"
              >
                Close & View Impact
              </button>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
