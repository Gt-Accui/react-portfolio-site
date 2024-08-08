import { FaTwitter, FaGithub } from "react-icons/fa";

import CoverImage from "../images/cover-image.jpg";
import ProfileImage from "../images/profile-image.png";

export const Header = () => {
    return (
        <header className="main-cover" style={{ backgroundImage: `url(${CoverImage})` }}>
            {/* overlay はカバー画像の上に透過して表示される背景要素 */}
            <div className="overlay"></div>
            <div className="container">
                <div className="display-table">
                    <div className="display-table-contents">
                        {/* カバー画像 */}
                        <div className="profile-thumb" style={{ backgroundImage: `url(${ ProfileImage })` }}></div>

                        <h1 className="title-text">ユーザー名</h1>
                        <h3 className="title-text">Engineer</h3>
                        <ul className="social-icons">
                            <li className="icon-link">
                                <a href="https://x.com/MastDele" target="blank">
                                    <FaTwitter color="white" size="2rem" />
                                </a>
                            </li>
                            <li className="icon-link">
                                <a href="https://github.com/Gt-Accui" target="blank">
                                    <FaGithub color="white" size="2rem" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
        // <div className="test-wrapper">
        //     <p className="text">
        //         このコンポーネントの名前は "{componentName()}" です。
        //     </p>
        // </div>  // as JSX
    );
};
