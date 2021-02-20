import colors from '../../styles/colors';

const SocialButton = ({ children, className }: BasicButtonProps) => {
  return (
    <>
      <button className={`${className} SocialButton`}>{children}</button>
      <style jsx>{`
        .SocialButton {
          user-select: none;
          cursor: pointer;
          color: white;
          font-size: 2.4rem;
          border: none;
          border-radius: 100%;
          align-items: center;
          padding: 10px auto;
          transition: all 0.3s;
          max-height: 50px;
          max-width: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
        }
        .telegram {
          background-color: ${colors.telegram};
        }
        .facebook {
          background-color: ${colors.facebook};
        }
        .discord {
          background-color: ${colors.discord};
        }
        .newsletter {
          background-color: ${colors.newsletter};
        }

        .SocialButton:hover {
          filter: brightness(1.2);
          transform: scale(1.02);
        }
      `}</style>
    </>
  );
};

interface BasicButtonProps {
  children: object | string;
  className: string;
}

SocialButton.defaultProps = {
  className: '',
};

export default SocialButton;
