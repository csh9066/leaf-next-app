import { route } from "next/dist/server/router";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import Modal from "../../ui/Modal";

interface Props {
  onClose: () => void;
  visible: boolean;
}

function LoginModal({ visible, onClose }: Props): ReactElement {
  const router = useRouter();

  return (
    <Modal visible={visible} onClose={onClose}>
      <div className="px-5 pt-10 pb-8 ">
        <p className="text-base mb-11">
          로그인이 필요한 서비스 입니다.
          <br />
          로그인 후 이용해주세요.
        </p>
        <a
          href={`http://localhost:8080/oauth2/authorization/kakao?next=${router.asPath}`}
          className="flex items-center px-5 font-bold text-lg text-center"
          style={{
            height: 56,
            backgroundColor: "#FFDC00",
            borderRadius: 10,
            color: "#381F1F",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="21"
            viewBox="0 0 22 21"
            fill="none"
          >
            <path
              d="M11.1981 0C5.45297 0 0.795654 3.90997 0.795654 8.73302C0.795654 11.8512 2.74274 14.5873 5.67162 16.1323C5.51227 16.7174 4.64769 19.8965 4.61323 20.1462C4.61323 20.1462 4.59256 20.3338 4.70666 20.4054C4.82083 20.477 4.95502 20.4214 4.95502 20.4214C5.28231 20.3727 8.75023 17.779 9.35052 17.3286C9.95016 17.419 10.5676 17.466 11.1981 17.466C16.9433 17.466 21.6006 13.5562 21.6006 8.73302C21.6006 3.90997 16.9433 0 11.1981 0Z"
              fill="#381F1F"
            />
          </svg>
          <span className="ml-12">카카오톡으로 진행</span>
        </a>
      </div>
    </Modal>
  );
}

export default LoginModal;
