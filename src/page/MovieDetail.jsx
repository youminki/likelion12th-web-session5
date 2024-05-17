import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieDATA } from '../assets/Data.js';
import containmentIcon from '../assets/icon/icon1.png';
import experienceRecordIcon from '../assets/icon/icon2.png';
import commonTasteIcon from '../assets/icon/icon3.png';
import moreDetailsIcon from '../assets/icon/icon4.png';
import Modal from '../components/Modal2.jsx'; // 공통 모달 컴포넌트
import '../page/MovieDetail.css';

const MovieDetail = () => {
    const { rank } = useParams();
    const movie = MovieDATA.find(m => m.rank === Number(rank));

    const [modalContent, setModalContent] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleIconClick = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent('');
    };

    return (
        <div className="movieDetail">
            <div className='Maincontainer1'>
                <img className="introImg" src={movie.intro} alt={movie.title} />
                <div className='lec1'>{movie.title}</div>
                <div className='lec2'>{movie.year} ・ {movie.country}</div>
                <div className='lec3'>예매율 {movie.percent} ・ 누적 관객 {movie.audience}</div>
            </div>
            <div className='Maincontainer2'>
                <img className="movieImg" src={movie.img} alt={movie.title} />
                <div className='box0'>
                    <div className='box1and2'>
                        <div className='box1'>
                            <div className='ratingContainer'>
                                <div className='starRating'><svg height="44" viewBox="0 0 44 44" width="44" xmlns="http://www.w3.org/2000/svg" fill="#eee" class="css-3zv2wn-StyledIcStar e1ri6xst0"><g fill-rule="evenodd"><path d="M22 33.444L9.83 42.327c-.784.572-1.842-.196-1.539-1.118l4.687-14.32L.769 18.06c-.787-.569-.383-1.812.588-1.81l15.067.033 4.624-14.34c.298-.924 1.606-.924 1.904 0l4.624 14.34 15.067-.033c.971-.002 1.375 1.241.588 1.81l-12.209 8.829 4.688 14.32c.302.922-.756 1.69-1.54 1.118L22 33.444z"></path></g></svg><svg height="44" viewBox="0 0 44 44" width="44" xmlns="http://www.w3.org/2000/svg" fill="#eee" class="css-3zv2wn-StyledIcStar e1ri6xst0"><g fill-rule="evenodd"><path d="M22 33.444L9.83 42.327c-.784.572-1.842-.196-1.539-1.118l4.687-14.32L.769 18.06c-.787-.569-.383-1.812.588-1.81l15.067.033 4.624-14.34c.298-.924 1.606-.924 1.904 0l4.624 14.34 15.067-.033c.971-.002 1.375 1.241.588 1.81l-12.209 8.829 4.688 14.32c.302.922-.756 1.69-1.54 1.118L22 33.444z"></path></g></svg><svg height="44" viewBox="0 0 44 44" width="44" xmlns="http://www.w3.org/2000/svg" fill="#eee" class="css-3zv2wn-StyledIcStar e1ri6xst0"><g fill-rule="evenodd"><path d="M22 33.444L9.83 42.327c-.784.572-1.842-.196-1.539-1.118l4.687-14.32L.769 18.06c-.787-.569-.383-1.812.588-1.81l15.067.033 4.624-14.34c.298-.924 1.606-.924 1.904 0l4.624 14.34 15.067-.033c.971-.002 1.375 1.241.588 1.81l-12.209 8.829 4.688 14.32c.302.922-.756 1.69-1.54 1.118L22 33.444z"></path></g></svg><svg height="44" viewBox="0 0 44 44" width="44" xmlns="http://www.w3.org/2000/svg" fill="#eee" class="css-3zv2wn-StyledIcStar e1ri6xst0"><g fill-rule="evenodd"><path d="M22 33.444L9.83 42.327c-.784.572-1.842-.196-1.539-1.118l4.687-14.32L.769 18.06c-.787-.569-.383-1.812.588-1.81l15.067.033 4.624-14.34c.298-.924 1.606-.924 1.904 0l4.624 14.34 15.067-.033c.971-.002 1.375 1.241.588 1.81l-12.209 8.829 4.688 14.32c.302.922-.756 1.69-1.54 1.118L22 33.444z"></path></g></svg><svg height="44" viewBox="0 0 44 44" width="44" xmlns="http://www.w3.org/2000/svg" fill="#eee" class="css-3zv2wn-StyledIcStar e1ri6xst0"><g fill-rule="evenodd"><path d="M22 33.444L9.83 42.327c-.784.572-1.842-.196-1.539-1.118l4.687-14.32L.769 18.06c-.787-.569-.383-1.812.588-1.81l15.067.033 4.624-14.34c.298-.924 1.606-.924 1.904 0l4.624 14.34 15.067-.033c.971-.002 1.375 1.241.588 1.81l-12.209 8.829 4.688 14.32c.302.922-.756 1.69-1.54 1.118L22 33.444z"></path></g></svg></div>
                                <div className='content5'>평가하기</div>
                            </div>
                            <div className='contentContainer'>
                                <div className='content4'>{movie.average}</div>
                                <div className='content5'>평균 별점</div>
                            </div>
                        </div>
                        <div className='box2'>
                            <div className='box3'>
                                <p className='content6'><img src={containmentIcon} alt="Icon" className="icon" onClick={() => handleIconClick("내 보관함에 작품을 담으려면 로그인이 필요해요. 회원가입 혹은 로그인해주세요.")} /> 보고싶어요 </p>
                                <p className='content6'> <img src={experienceRecordIcon} alt="Icon" className="icon" onClick={() => handleIconClick("지금 회원가입 혹은 로그인하시고, 경험한 감동을 기록해보세요.")} /> 코멘트</p>
                                <p className='content6'> <img src={commonTasteIcon} alt="Icon" className="icon" onClick={() => handleIconClick("로그인이 필요한 기능이에요. 지금 회원가입 혹은 로그인하고 공통의 취향을 나눠보세요")} /> 보는중</p>
                                <p className='content6'> <img src={moreDetailsIcon} alt="Icon" className="icon" onClick={() => handleIconClick("로그인이 필요한 기능이에요. 지금 회원가입 혹은 로그인하고 공통의 취향을 나눠보세요")} /> 더보기</p>
                            </div>
                            <Modal isOpen={isModalOpen} closeModal={closeModal} modalContent={modalContent} />
                            <section className='box4'>
                                <p className="movieContent">{movie.content}</p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Maincontainer3'>
                <header className='headerContainer'> 출연/제작</header>
                <div className='ulContainer'>
                    <div className='Picture'></div>
                    <div className='PictureContent'>
                        <div className='PictureContent1'>이엘</div>
                        <div className='PictureContent2'>주연</div>
                    </div>
                    <div className='Picture2'></div>
                    <div className='PictureContent'>
                        <div className='PictureContent1'>이엘</div>
                        <div className='PictureContent2'>주연</div>
                    </div>
                    <div className='Picture3'></div>
                    <div className='PictureContent'>
                        <div className='PictureContent1'>이엘</div>
                        <div className='PictureContent2'>주연</div>
                    </div>
                    <div className='Picture4'></div>
                    <div className='PictureContent'>
                        <div className='PictureContent1'>이엘</div>
                        <div className='PictureContent2'>주연</div>
                    </div>
                </div>
                <div className='ulContainer'>
                    <div className='Picture'></div>
                    <div className='PictureContent'>
                        <div className='PictureContent1'>이엘</div>
                        <div className='PictureContent2'>주연</div>
                    </div>
                    <div className='Picture2'></div>
                    <div className='PictureContent'>
                        <div className='PictureContent1'>이엘</div>
                        <div className='PictureContent2'>주연</div>
                    </div>
                    <div className='Picture3'></div>
                    <div className='PictureContent'>
                        <div className='PictureContent1'>이엘</div>
                        <div className='PictureContent2'>주연</div>
                    </div>
                    <div className='Picture4'></div>
                    <div className='PictureContent'>
                        <div className='PictureContent1'>이엘</div>
                        <div className='PictureContent2'>주연</div>
                    </div>
                </div>
                <div className='ulContainer'>
                    <div className='Picture'></div>
                    <div className='PictureContent'>
                        <div className='PictureContent1'>이엘</div>
                        <div className='PictureContent2'>주연</div>
                    </div>
                    <div className='Picture2'></div>
                    <div className='PictureContent'>
                        <div className='PictureContent1'>이엘</div>
                        <div className='PictureContent2'>주연</div>
                    </div>
                    <div className='Picture3'></div>
                    <div className='PictureContent'>
                        <div className='PictureContent1'>이엘</div>
                        <div className='PictureContent2'>주연</div>
                    </div>
                    <div className='Picture4'></div>
                    <div className='PictureContent'>
                        <div className='PictureContent1'>이엘</div>
                        <div className='PictureContent2'>주연</div>
                    </div>
                </div>
                <div className='ulContainer'>
                    <div className='Picture'></div>
                    <div className='PictureContent'>
                        <div className='PictureContent1'>이엘</div>
                        <div className='PictureContent2'>주연</div>
                    </div>
                    <div className='Picture2'></div>
                    <div className='PictureContent'>
                        <div className='PictureContent1'>이엘</div>
                        <div className='PictureContent2'>주연</div>
                    </div>
                    <div className='Picture3'></div>
                    <div className='PictureContent'>
                        <div className='PictureContent1'>이엘</div>
                        <div className='PictureContent2'>주연</div>
                    </div>
                    <div className='Picture4'></div>
                    <div className='PictureContent'>
                        <div className='PictureContent1'>이엘</div>
                        <div className='PictureContent2'>주연</div>
                    </div>
                </div>
            </div>
            <div className='Maincontainer4'>
                <header className='comentHeader'>
                    <h2> 코멘트</h2>
                    <span>4500+</span>
                    <div className='comentContent1'>더보기</div>
                </header>
                <ul className='CommentMainbox'>
                    <li className='CommentSubbox'>
                        <div className='boxC'>
                            <div className='boxC1'>
                                <div>이동진 평론가</div>
                                <div className='starBox'>
                                    <img alt="star" height="16px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiM0QTRBNEEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDE3Ljk4bC02LjAxNSA0LjM5MmMtLjUwOC4zNzItMS4xOTQtLjEyNi0uOTk4LS43MjVsMi4zMTctNy4wODEtNi4wMzUtNC4zNjdjLS41MS0uMzY5LS4yNDctMS4xNzUuMzgyLTEuMTc0bDcuNDQ3LjAxNiAyLjI4Ni03LjA5MWMuMTkyLS42IDEuMDQtLjYgMS4yMzMgMGwyLjI4NiA3LjA5IDcuNDQ3LS4wMTVjLjYyOS0uMDAxLjg5LjgwNS4zOCAxLjE3NGwtNi4wMzMgNC4zNjcgMi4zMTYgNy4wOGMuMTk2LjYtLjQ5IDEuMDk4LS45OTkuNzI2TDEyIDE3Ljk4eiIvPgo8L3N2Zz4K" width="16px"></img>4.5</div>
                            </div>
                            <div className='boxC2'>익숨함에서 진부함으로 넘어가는 고개 너머에서 뚝딱.</div>
                            <div className='boxC3'>
                                <div className='ddabong'></div>
                                <div className='num'>255</div>
                                <div className='chat'></div>
                                <div className='num'>23</div>
                            </div>
                            <div className='boxC4'>좋아요</div>
                        </div>
                    </li>
                    <li className='CommentSubbox'>
                        <div className='boxC'>
                            <div className='boxC1'>
                                <div>이동진 평론가</div>
                                <div className='starBox'>
                                    <img alt="star" height="16px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiM0QTRBNEEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDE3Ljk4bC02LjAxNSA0LjM5MmMtLjUwOC4zNzItMS4xOTQtLjEyNi0uOTk4LS43MjVsMi4zMTctNy4wODEtNi4wMzUtNC4zNjdjLS41MS0uMzY5LS4yNDctMS4xNzUuMzgyLTEuMTc0bDcuNDQ3LjAxNiAyLjI4Ni03LjA5MWMuMTkyLS42IDEuMDQtLjYgMS4yMzMgMGwyLjI4NiA3LjA5IDcuNDQ3LS4wMTVjLjYyOS0uMDAxLjg5LjgwNS4zOCAxLjE3NGwtNi4wMzMgNC4zNjcgMi4zMTYgNy4wOGMuMTk2LjYtLjQ5IDEuMDk4LS45OTkuNzI2TDEyIDE3Ljk4eiIvPgo8L3N2Zz4K" width="16px"></img>4.5</div>
                            </div>
                            <div className='boxC2'>익숨함에서 진부함으로 넘어가는 고개 너머에서 뚝딱.</div>
                            <div className='boxC3'>
                                <div className='ddabong'></div>
                                <div className='num'>255</div>
                                <div className='chat'></div>
                                <div className='num'>23</div>
                            </div>
                            <div className='boxC4'>좋아요</div>
                        </div>
                    </li>
                    <li className='CommentSubbox'>
                        <div className='boxC'>
                            <div className='boxC1'>
                                <div>이동진 평론가</div>
                                <div className='starBox'>
                                    <img alt="star" height="16px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiM0QTRBNEEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDE3Ljk4bC02LjAxNSA0LjM5MmMtLjUwOC4zNzItMS4xOTQtLjEyNi0uOTk4LS43MjVsMi4zMTctNy4wODEtNi4wMzUtNC4zNjdjLS41MS0uMzY5LS4yNDctMS4xNzUuMzgyLTEuMTc0bDcuNDQ3LjAxNiAyLjI4Ni03LjA5MWMuMTkyLS42IDEuMDQtLjYgMS4yMzMgMGwyLjI4NiA3LjA5IDcuNDQ3LS4wMTVjLjYyOS0uMDAxLjg5LjgwNS4zOCAxLjE3NGwtNi4wMzMgNC4zNjcgMi4zMTYgNy4wOGMuMTk2LjYtLjQ5IDEuMDk4LS45OTkuNzI2TDEyIDE3Ljk4eiIvPgo8L3N2Zz4K" width="16px"></img>4.5</div>
                            </div>
                            <div className='boxC2'>익숨함에서 진부함으로 넘어가는 고개 너머에서 뚝딱.</div>
                            <div className='boxC3'>
                                <div className='ddabong'></div>
                                <div className='num'>255</div>
                                <div className='chat'></div>
                                <div className='num'>23</div>
                            </div>
                            <div className='boxC4'>좋아요</div>
                        </div>
                    </li>
                    <li className='CommentSubbox'>
                        <div className='boxC'>
                            <div className='boxC1'>
                                <div>이동진 평론가</div>
                                <div className='starBox'>
                                    <img alt="star" height="16px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiM0QTRBNEEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDE3Ljk4bC02LjAxNSA0LjM5MmMtLjUwOC4zNzItMS4xOTQtLjEyNi0uOTk4LS43MjVsMi4zMTctNy4wODEtNi4wMzUtNC4zNjdjLS41MS0uMzY5LS4yNDctMS4xNzUuMzgyLTEuMTc0bDcuNDQ3LjAxNiAyLjI4Ni03LjA5MWMuMTkyLS42IDEuMDQtLjYgMS4yMzMgMGwyLjI4NiA3LjA5IDcuNDQ3LS4wMTVjLjYyOS0uMDAxLjg5LjgwNS4zOCAxLjE3NGwtNi4wMzMgNC4zNjcgMi4zMTYgNy4wOGMuMTk2LjYtLjQ5IDEuMDk4LS45OTkuNzI2TDEyIDE3Ljk4eiIvPgo8L3N2Zz4K" width="16px"></img>4.5</div>
                            </div>
                            <div className='boxC2'>익숨함에서 진부함으로 넘어가는 고개 너머에서 뚝딱.</div>
                            <div className='boxC3'>
                                <div className='ddabong'></div>
                                <div className='num'>255</div>
                                <div className='chat'></div>
                                <div className='num'>23</div>
                            </div>
                            <div className='boxC4'>좋아요</div>
                        </div>
                    </li>
                    <li className='CommentSubbox'>
                        <div className='boxC'>
                            <div className='boxC1'>
                                <div>이동진 평론가</div>
                                <div className='starBox'>
                                    <img alt="star" height="16px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiM0QTRBNEEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDE3Ljk4bC02LjAxNSA0LjM5MmMtLjUwOC4zNzItMS4xOTQtLjEyNi0uOTk4LS43MjVsMi4zMTctNy4wODEtNi4wMzUtNC4zNjdjLS41MS0uMzY5LS4yNDctMS4xNzUuMzgyLTEuMTc0bDcuNDQ3LjAxNiAyLjI4Ni03LjA5MWMuMTkyLS42IDEuMDQtLjYgMS4yMzMgMGwyLjI4NiA3LjA5IDcuNDQ3LS4wMTVjLjYyOS0uMDAxLjg5LjgwNS4zOCAxLjE3NGwtNi4wMzMgNC4zNjcgMi4zMTYgNy4wOGMuMTk2LjYtLjQ5IDEuMDk4LS45OTkuNzI2TDEyIDE3Ljk4eiIvPgo8L3N2Zz4K" width="16px"></img>4.5</div>
                            </div>
                            <div className='boxC2'>익숨함에서 진부함으로 넘어가는 고개 너머에서 뚝딱.</div>
                            <div className='boxC3'>
                                <div className='ddabong'></div>
                                <div className='num'>255</div>
                                <div className='chat'></div>
                                <div className='num'>23</div>
                            </div>
                            <div className='boxC4'>좋아요</div>
                        </div>
                    </li>
                    <li className='CommentSubbox'>
                        <div className='boxC'>
                            <div className='boxC1'>
                                <div>이동진 평론가</div>
                                <div className='starBox'>
                                    <img alt="star" height="16px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiM0QTRBNEEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDE3Ljk4bC02LjAxNSA0LjM5MmMtLjUwOC4zNzItMS4xOTQtLjEyNi0uOTk4LS43MjVsMi4zMTctNy4wODEtNi4wMzUtNC4zNjdjLS41MS0uMzY5LS4yNDctMS4xNzUuMzgyLTEuMTc0bDcuNDQ3LjAxNiAyLjI4Ni03LjA5MWMuMTkyLS42IDEuMDQtLjYgMS4yMzMgMGwyLjI4NiA3LjA5IDcuNDQ3LS4wMTVjLjYyOS0uMDAxLjg5LjgwNS4zOCAxLjE3NGwtNi4wMzMgNC4zNjcgMi4zMTYgNy4wOGMuMTk2LjYtLjQ5IDEuMDk4LS45OTkuNzI2TDEyIDE3Ljk4eiIvPgo8L3N2Zz4K" width="16px"></img>4.5</div>
                            </div>
                            <div className='boxC2'>익숨함에서 진부함으로 넘어가는 고개 너머에서 뚝딱.</div>
                            <div className='boxC3'>
                                <div className='ddabong'></div>
                                <div className='num'>255</div>
                                <div className='chat'></div>
                                <div className='num'>23</div>
                            </div>
                            <div className='boxC4'>좋아요</div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='Maincontainer4'>
                <header className='galaryHeader'>갤러리</header>
                <div className="galaryList">
                    <div className='galaryItem'>
                        <div className='galaryImg1'></div>
                        <div className='galaryImg2'></div>
                        <div className='galaryImg3'></div>
                        <div className='galaryImg4'></div>
                        <div className='galaryImg5'></div>
                        <div className='galaryImg6'></div>
                        <div className='galaryImg7'></div>
                        <div className='galaryImg8'></div>
                    </div>
                </div>
            </div>
            <div className='Maincontainer4'>
                <header className='galaryHeader'>동영상</header>
                <div className="galaryList">
                    <div className='galaryItem'>
                        <div className='galaryImg1'></div>
                        <div className='galaryImg2'></div>
                        <div className='galaryImg3'></div>
                        <div className='galaryImg4'></div>
                        <div className='galaryImg5'></div>
                        <div className='galaryImg6'></div>
                        <div className='galaryImg7'></div>
                        <div className='galaryImg8'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;
