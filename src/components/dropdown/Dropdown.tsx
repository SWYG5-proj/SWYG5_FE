import { useState } from "react";
import * as S from "./Dropdown.styled";
import { CheckIcon, DropdownArrowIcon } from "assets";

interface DropdownProps {
  options: { label: string; value: number }[];
}
const Dropdown = ({ options }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (label: string) => {
    setSelectedOption(label);
    setIsOpen(false);
  };

  return (
    <S.DropdownContainer>
      <S.SelectContainer onClick={handleToggle}>
        <S.SelectedValue> {selectedOption || "선택하기"}</S.SelectedValue>
        <DropdownArrowIcon css={S.arrowIcon} />
        {isOpen && (
          <S.DropdownList>
            {options.map((option, index) => (
              <S.DropdownItem
                key={index}
                onClick={() => handleSelect(option.label)}
              >
                {option.label}
                <CheckIcon css={S.checkIcon} />
              </S.DropdownItem>
            ))}
          </S.DropdownList>
        )}
      </S.SelectContainer>
    </S.DropdownContainer>
  );
};

export default Dropdown;
