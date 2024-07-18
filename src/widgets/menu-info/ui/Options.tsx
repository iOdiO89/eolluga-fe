// components/Options.tsx
import React from "react";
import formatNumber from "@/widgets/menu-info//utils/formatNumber";
import { Option } from "@/shared/types/menu-detail-types";

interface OptionsProps {
  optionList: Option[];
}

const Options: React.FC<OptionsProps> = ({ optionList }) => {
  return (
    <>
      {optionList.map((option, index) => (
        <div
          className="flex flex-col w-full items-start px-4 py-5 gap-5 bg-white"
          key={index}
        >
          <div className="flex flex-col w-full items-start gap-1">
            <div className="flex justify-between w-full items-center">
              <div className="font-Pretendard text-base font-bold">
                {option.title}
              </div>
              {option.optional === "required" ? (
                <div className="font-Pretendard text-sm font-bold text-[#0043CE]">
                  필수
                </div>
              ) : (
                <div className="font-Pretendard text-sm font-bold text-[#6F6F6F]">
                  선택
                </div>
              )}
            </div>
            {option.description && (
              <div className="font-Pretendard text-xs font-regular text-[#6F6F6F]">
                {option.description}
              </div>
            )}
          </div>

          <div className="flex flex-col w-full items-start gap-4">
            {Object.keys(option.options).map((key, idx) => (
              <div
                className="flex justify-between w-full items-start"
                key={idx}
              >
                <div className="flex w-full flex-col items-start gap-2">
                  <div className="flex w-full justify-between items-start">
                    <label className="flex h-[24px] items-center gap-2 cursor-pointer">
                      <input
                        type={option.type === "radio" ? "radio" : "checkbox"}
                        name={option.title}
                        value={key}
                      />
                      <div className="font-Pretendard text-base font-regular">
                        {key}
                      </div>
                    </label>
                    <div className="font-Pretendard text-base font-bold">
                      +{formatNumber(option.options[key])}원
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Options;
