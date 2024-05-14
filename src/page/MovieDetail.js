import React from 'react';
import { useParams } from 'react-router-dom';
import { MovieDATA } from '../assets/Data.js';
import Icon1 from '../assets/icon/icon1.png';
import Icon2 from '../assets/icon/icon2.png';
import Icon3 from '../assets/icon/icon3.png';
import Icon4 from '../assets/icon/icon4.png';
import '../page/Movie.css';
import '../page/MovieDetail.css';
const MovieDetail = () => {
    const { rank } = useParams();
    const movie = MovieDATA.find(m => m.rank === Number(rank));
    return (
        <div className="movieDetail">
            <div className='Maincontainer1'>
                <img className="introImg" src={movie.intro} alt={movie.title} />
                <div className='lec1'> {movie.title}</div>
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
                                <div className='content4'> {movie.average}</div>
                                <div className='content5'>평균 별점</div>
                            </div>
                        </div>
                        <div className='box2'>
                            <div className='box3'>
                                <p className='content6'> <img src={Icon1} alt="Icon" className="icon" /> 보고싶어요</p>
                                <p className='content6'> <img src={Icon2} alt="Icon" className="icon" /> 코멘트</p>
                                <p className='content6'> <img src={Icon3} alt="Icon" className="icon" /> 보는중</p>
                                <p className='content6'> <img src={Icon4} alt="Icon" className="icon" /> 더보기</p>
                            </div>
                        </div>
                        <section className='box4'>
                            <p className="movieContent">{movie.content}</p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;