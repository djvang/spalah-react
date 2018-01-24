import React, { Component } from 'react';
import './school.scss';

class School extends Component {
    render(){
        return (
            <div className="wrapper uk-offcanvas-content">
                <div className="hero hero-school" id="hero">
                    <div className="hero-foreground">
                        <div className="hero-header">
                            <button className="navbar-toggler" type="button" data-uk-toggle="target: #offcanvas">
                                <span className="icon-menu"></span>
                                <span uk-close></span>
                            </button>
                            <nav className="navbar"
                                 data-uk-sticky="show-on-up: true; animation: uk-animation-slide-top;">
                            </nav>
                            <div id="offcanvas" data-uk-offcanvas="overlay: true; mode: none;">
                                <div className="uk-offcanvas-bar">
                                    <div className="uk-offcanvas-header">
                                        <div className="container">
                                            <div className="uk-offcanvas-header-container">
                                                <a className="uk-offcanvas-brand">
                                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="81"
                                                         height="32" viewBox="0 0 81 32">
                                                        <title>i-logo</title>
                                                        <path fill="#444"
                                                              d="M0 1.829v0l1.829-1.829v32l-1.829-1.829h81.371l-1.829 1.829v-32l1.829 1.829h-81.371zM0 0h81.371v32h-81.371v-32z"></path>
                                                        <path fill="#444"
                                                              d="M11.429 18.1l1.131-1.22c0.723 0.519 1.529 0.795 2.377 0.795 0.546 0 0.839-0.172 0.839-0.474 0-0.275-0.242-0.426-1.237-0.634-1.56-0.323-2.765-0.72-2.765-2.102 0-1.232 1.080-2.122 2.837-2.122 1.248 0 2.222 0.304 3.018 0.882l-1.017 1.298c-0.67-0.426-1.404-0.654-2.053-0.654-0.492 0-0.733 0.189-0.733 0.444 0 0.304 0.251 0.436 1.268 0.644 1.687 0.332 2.734 0.823 2.734 2.084 0 1.355-1.184 2.159-2.966 2.159-1.298 0-2.534-0.37-3.434-1.1z"></path>
                                                        <path fill="#444"
                                                              d="M24.583 15.752c0.746 0 1.202-0.352 1.202-0.912 0-0.586-0.456-0.899-1.212-0.899h-0.986v1.811h0.996zM21.486 12.343h3.248c1.916 0 3.152 0.893 3.152 2.43 0 1.617-1.377 2.469-3.26 2.469h-1.039v1.958h-2.1v-6.857z"></path>
                                                        <path fill="#444"
                                                              d="M34.175 16.514l-0.819-1.933-0.83 1.933h1.65zM32.389 12.343h1.967l3.13 6.857h-2.186l-0.535-1.216h-2.838l-0.525 1.216h-2.144l3.131-6.857z"></path>
                                                        <path fill="#444"
                                                              d="M40.686 12.343h1.997v5.192h3.489v1.666h-5.486v-6.857z"></path>
                                                        <path fill="#444"
                                                              d="M54.291 16.514l-0.82-1.933-0.828 1.933h1.648zM52.504 12.343h1.965l3.131 6.857h-2.185l-0.536-1.216h-2.836l-0.527 1.216h-2.144l3.132-6.857z"></path>
                                                        <path fill="#444"
                                                              d="M60.343 12.343h1.949v2.567h2.5v-2.567h1.95v6.857h-1.95v-2.606h-2.5v2.606h-1.949v-6.857z"></path>
                                                    </svg>
                                                </a>
                                                <ul className="uk-offcanvas-navbar">
                                                    <li><a href="#">Все курсы</a></li>
                                                    <li><a href="#">Дистанционное образование </a></li>
                                                    <li><a href="#">Блог</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="uk-offcanvas-body">
                                        <div className="container">
                                            <div className="uk-offcanvas-navs">
                                                <div>
                                                    <div className="uk-offcanvas-nav">
                                                        <div className="uk-offcanvas-nav-title">Харьков</div>
                                                        <ul className="uk-offcanvas-nav-list">
                                                            <li><a href="#">Образование</a></li>
                                                            <li><a href="#">Мероприятия</a></li>
                                                            <li><a href="#">Коворкинг</a></li>
                                                            <li><a href="#">Контакты</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="uk-offcanvas-nav uk-active">
                                                        <div className="uk-offcanvas-nav-title">Днепр</div>
                                                        <ul className="uk-offcanvas-nav-list">
                                                            <li><a href="#">Образование</a></li>
                                                            <li><a href="#">Мероприятия</a></li>
                                                            <li><a href="#">Коворкинг</a></li>
                                                            <li><a href="#">Контакты</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="uk-offcanvas-nav">
                                                        <div className="uk-offcanvas-nav-title">Одесса</div>
                                                        <ul className="uk-offcanvas-nav-list">
                                                            <li><a href="#">Образование</a></li>
                                                            <li><a href="#">Мероприятия</a></li>
                                                            <li><a href="#">Контакты</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="uk-offcanvas-nav">
                                                        <div className="uk-offcanvas-nav-title">Киев</div>
                                                        <ul className="uk-offcanvas-nav-list">
                                                            <li><a href="#">Образование</a></li>
                                                            <li><a href="#">Мероприятия</a></li>
                                                            <li><a href="#">Контакты</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="uk-offcanvas-nav">
                                                        <div className="uk-offcanvas-nav-title">Запорожье</div>
                                                        <ul className="uk-offcanvas-nav-list">
                                                            <li><a href="#">Образование</a></li>
                                                            <li><a href="#">Мероприятия</a></li>
                                                            <li><a href="#">Контакты</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="uk-offcanvas-nav">
                                                        <div className="uk-offcanvas-nav-title">Мариуполь</div>
                                                        <ul className="uk-offcanvas-nav-list">
                                                            <li><a href="#">Образование</a></li>
                                                            <li><a href="#">Мероприятия</a></li>
                                                            <li><a href="#">Коворкинг</a></li>
                                                            <li><a href="#">Контакты</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="uk-offcanvas-footer">
                                        <div className="container">
                                            <div className="uk-offcanvas-footer-container">
                                                <ul className="uk-offcanvas-footer-nav">
                                                    <li><a href="#">О Spalah</a></li>
                                                    <li><a href="#">Партнерская программа</a></li>
                                                    <li><a href="#">Карьера в Spalah</a></li>
                                                    <li><a href="#">Франчайзи, инвесторам, арендодателям</a></li>
                                                </ul>
                                                <div className="uk-offcanvas-copyright">© 2017</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hero-body">
                            <div className="container">
                                <div className="hero-content">
                                    <div className="hero-content-body">
                                        <h1 className="hero-title">Образование <br /> в сфере цифровых <br /> технологий
                                        </h1>
                                        <div className="hero-actions">
                                            <a href="#section-educational-programs" data-uk-scroll className="button">Выбрать
                                                курс</a>
                                        </div>
                                    </div>
                                    <div className="hero-content-right">
                                        <div className="hero-sticker" data-uk-lightbox>
                                            <a href="https://www.youtube.com/watch?v=YE7VzlLtp-4"
                                               className="button-trailer"><span
                                                className="icon-play"></span>Трейлер школы</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <main className="main" id="main">
                    <section className="section section-photos-school" id="section-photos-school">
                        <div className="section-foreground">
                            <div className="section-body">
                                <div className="container">
                                    <div className="layout layout-photos-school">
                                        <div className="layout-item">
                                            <div className="swiper-container swiper-photos-school">
                                                <div className="swiper-wrapper grid grid-photos-school">
                                                    <div className="grid-item swiper-slide">
                                                        <div className="card card-photo">
                                                            <div className="card-header">
                                                                <div className="card-image">
                                                                    <img src="images/photo-1.jpg" alt=""/>
                                                                </div>
                                                            </div>
                                                            <div className="card-body">
                                                                <div className="card-description">
                                                                    Студенты курса HTML/CSS верстка на мастер-классе
                                                                    Ивана Голвинова —
                                                                    Боевая верста
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="grid-item swiper-slide">
                                                        <div className="card card-photo">
                                                            <div className="card-header">
                                                                <div className="card-image">
                                                                    <img src="images/photo-1.jpg" alt=""/>
                                                                </div>
                                                            </div>
                                                            <div className="card-body">
                                                                <div className="card-description">
                                                                    Студенты курса HTML/CSS верстка на мастер-классе
                                                                    Ивана Голвинова —
                                                                    Боевая верста
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="grid-item swiper-slide">
                                                        <div className="card card-photo">
                                                            <div className="card-header">
                                                                <div className="card-image">
                                                                    <img src="images/photo-1.jpg" alt=""/>
                                                                </div>
                                                            </div>
                                                            <div className="card-body">
                                                                <div className="card-description">
                                                                    Студенты курса HTML/CSS верстка на мастер-классе
                                                                    Ивана Голвинова —
                                                                    Боевая верста
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section section-about-school" id="section-about-school">
                        <div className="section-foreground">
                            <div className="section-body">
                                <div className="container">
                                    <div className="layout layout-about-school">
                                        <div className="layout-item">
                                            <div className="heading">
                                                <h3 className="heading-title">О школе</h3>
                                                <div className="heading-description">Несмотря на то, что основная
                                                    деятельность нашей
                                                    школы направлена на обучение IT, трудно не заметить – мы создали
                                                    особенный мир с
                                                    командой единомышленников и душевной атмосферой.
                                                </div>
                                                <div className="heading-content">
                                                    <p>Мы развиваем IT комьюнити в Украине и формируем новое поколение
                                                        IT
                                                        профессионалов. Spalah IT-School каждый день работает для того,
                                                        чтобы
                                                        предоставить студентам возможности для профессионального
                                                        развития, а
                                                        выпускники были востребованы на рынке IT и задействованы в
                                                        масштабных
                                                        проектах.</p>
                                                    <p>Здесь на расстоянии вытянутой руки находятся преподаватели и
                                                        интересные
                                                        спикеры, которые смогут держать вас в тонусе и вдохновлять на
                                                        новые
                                                        свершения. А команда Spalah всегда придет на помощь в решении
                                                        любого
                                                        вопроса.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="layout-item">
                                            <div className="grid grid-statistics grid-statistics-bordered">
                                                <div className="grid-item">
                                                    <div className="statistic">
                                                        <div className="statistic-value">2 856</div>
                                                        <div className="statistic-label">студентов мы выпустили с
                                                            момента открытия
                                                            нашего образовательного проекта в 2012 г.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="grid-item">
                                                    <div className="statistic">
                                                        <div className="statistic-value">67<span
                                                            className="statistic-symbol">%</span></div>
                                                        <div className="statistic-label">студентов мы выпустили с
                                                            момента открытия
                                                            нашего образовательного проекта в 2012 г.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="grid-item">
                                                    <div className="statistic">
                                                        <div className="statistic-value">9.8</div>
                                                        <div className="statistic-label">студентов мы выпустили с
                                                            момента открытия
                                                            нашего образовательного проекта в 2012 г.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="layout-item">
                                            <div className="heading">
                                                <h3 className="heading-title">Компании партнеры</h3>
                                                <div className="heading-content">
                                                    <p>Нам важно, чтоб вокруг нас формировалось сообщество
                                                        единомышленников. Мы
                                                        сотрудничаем с ведущими IT-компаниями
                                                        в сфере разработки образовательных программ под нужды рынка, а
                                                        также в
                                                        области трудоустройства выпускников. Преподаватели, которые
                                                        работают у
                                                        нас, разделяют наши идеи и ценности и являются лучшими
                                                        сотрудниками
                                                        данных компаний. </p>
                                                </div>
                                            </div>
                                            <div className="grid grid-partners">
                                                <div className="grid-item">
                                                    <a href="#" className="card card-partner">
                                                        <img src="images/devart-logo.png" alt="devart-logo"
                                                             className="card-image"/>
                                                    </a>
                                                </div>
                                                <div className="grid-item">
                                                    <a href="#" className="card card-partner">
                                                        <img src="images/devart-logo.png" alt="devart-logo"
                                                             className="card-image"/>
                                                    </a>
                                                </div>
                                                <div className="grid-item">
                                                    <a href="#" className="card card-partner">
                                                        <img src="images/devart-logo.png" alt="devart-logo"
                                                             className="card-image"/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section section-features" id="section-features">
                        <div className="section-foreground">
                            <div className="section-body">
                                <div className="container">
                                    <div className="layout layout-features">
                                        <div className="layout-item">
                                            <div className="heading">
                                                <h2 className="heading-title">Уникальность обучения</h2>
                                            </div>
                                        </div>
                                        <div className="layout-item">
                                            <div className="grid grid-features">
                                                <div className="grid-item">
                                                    <div className="card card-feature">
                                                        <div className="card-header">
                                                            <div className="card-image">
                                                                <img src="images/img-1.png" alt=""/>
                                                            </div>
                                                        </div>
                                                        <div className="card-body">
                                                            <h4 className="card-title">Кейсовый метод</h4>
                                                            <div className="card-content">
                                                                <p>
                                                                    У каждого студента во время учебы всегда есть
                                                                    возможность
                                                                    обратиться за помощью к ментору, как в онлайн режиме
                                                                    так и во
                                                                    время личных встреч. Ментор - выпускник Spalah
                                                                    IT-School,
                                                                    который успешно окончил курс и прошел тесты для
                                                                    подтверждения
                                                                    навыков.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="grid-item">
                                                    <div className="card card-feature">
                                                        <div className="card-header">
                                                            <div className="card-image">
                                                                <img src="images/img-1.png" alt=""/>
                                                            </div>
                                                        </div>
                                                        <div className="card-body">
                                                            <h4 className="card-title">Кейсовый метод</h4>
                                                            <div className="card-content">
                                                                <p>
                                                                    У каждого студента во время учебы всегда есть
                                                                    возможность
                                                                    обратиться за помощью к ментору, как в онлайн режиме
                                                                    так и во
                                                                    время личных встреч. Ментор - выпускник Spalah
                                                                    IT-School,
                                                                    который успешно окончил курс и прошел тесты для
                                                                    подтверждения
                                                                    навыков.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="grid-item">
                                                    <div className="card card-feature">
                                                        <div className="card-header">
                                                            <div className="card-image">
                                                                <img src="images/img-1.png" alt=""/>
                                                            </div>
                                                        </div>
                                                        <div className="card-body">
                                                            <h4 className="card-title">Кейсовый метод</h4>
                                                            <div className="card-content">
                                                                <p>
                                                                    У каждого студента во время учебы всегда есть
                                                                    возможность
                                                                    обратиться за помощью к ментору, как в онлайн режиме
                                                                    так и во
                                                                    время личных встреч. Ментор - выпускник Spalah
                                                                    IT-School,
                                                                    который успешно окончил курс и прошел тесты для
                                                                    подтверждения
                                                                    навыков.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="grid-item">
                                                    <div className="card card-feature">
                                                        <div className="card-header">
                                                            <div className="card-image">
                                                                <img src="images/img-1.png" alt=""/>
                                                            </div>
                                                        </div>
                                                        <div className="card-body">
                                                            <h4 className="card-title">Кейсовый метод</h4>
                                                            <div className="card-content">
                                                                <p>
                                                                    У каждого студента во время учебы всегда есть
                                                                    возможность
                                                                    обратиться за помощью к ментору, как в онлайн режиме
                                                                    так и во
                                                                    время личных встреч. Ментор - выпускник Spalah
                                                                    IT-School,
                                                                    который успешно окончил курс и прошел тесты для
                                                                    подтверждения
                                                                    навыков.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="grid-item">
                                                    <div className="card card-feature">
                                                        <div className="card-header">
                                                            <div className="card-image">
                                                                <img src="images/img-1.png" alt=""/>
                                                            </div>
                                                        </div>
                                                        <div className="card-body">
                                                            <h4 className="card-title">Кейсовый метод</h4>
                                                            <div className="card-content">
                                                                <p>
                                                                    У каждого студента во время учебы всегда есть
                                                                    возможность
                                                                    обратиться за помощью к ментору, как в онлайн режиме
                                                                    так и во
                                                                    время личных встреч. Ментор - выпускник Spalah
                                                                    IT-School,
                                                                    который успешно окончил курс и прошел тесты для
                                                                    подтверждения
                                                                    навыков.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="grid-item">
                                                    <div className="card card-feature">
                                                        <div className="card-header">
                                                            <div className="card-image">
                                                                <img src="images/img-1.png" alt=""/>
                                                            </div>
                                                        </div>
                                                        <div className="card-body">
                                                            <h4 className="card-title">Кейсовый метод</h4>
                                                            <div className="card-content">
                                                                <p>
                                                                    У каждого студента во время учебы всегда есть
                                                                    возможность
                                                                    обратиться за помощью к ментору, как в онлайн режиме
                                                                    так и во
                                                                    время личных встреч. Ментор - выпускник Spalah
                                                                    IT-School,
                                                                    который успешно окончил курс и прошел тесты для
                                                                    подтверждения
                                                                    навыков.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="grid-item">
                                                    <div className="card card-feature">
                                                        <div className="card-header">
                                                            <div className="card-image">
                                                                <img src="images/img-1.png" alt=""/>
                                                            </div>
                                                        </div>
                                                        <div className="card-body">
                                                            <h4 className="card-title">Кейсовый метод</h4>
                                                            <div className="card-content">
                                                                <p>
                                                                    У каждого студента во время учебы всегда есть
                                                                    возможность
                                                                    обратиться за помощью к ментору, как в онлайн режиме
                                                                    так и во
                                                                    время личных встреч. Ментор - выпускник Spalah
                                                                    IT-School,
                                                                    который успешно окончил курс и прошел тесты для
                                                                    подтверждения
                                                                    навыков.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section section-educational-programs" id="section-educational-programs">
                        <div className="section-foreground">
                            <div className="section-header">
                                <div className="container">
                                    <div className="layout layout-educational-programs-header">
                                        <div className="layout-item">
                                            <div className="heading">
                                                <h2 className="heading-title">Образовательные программы</h2>
                                            </div>
                                        </div>
                                        <div className="layout-item">
                                            <div className="toolbar"
                                                 data-uk-sticky="show-on-up: true; animation: uk-animation-slide-top; offset: 96; bottom: #content-filter">
                                                <div className="toolbar-filter">
                                                    <ul className="nav nav-tab nav-filter"
                                                        data-uk-tab="connect: #content-filter;  animation: uk-animation-fade;">
                                                        <li className="uk-active"><a href="#content-filter"
                                                                                     data-uk-scroll="offset: 200; duration: 500">Все
                                                            курсы</a></li>
                                                        <li><a href="#content-filter"
                                                               data-uk-scroll="offset: 200; duration: 500">Текущие
                                                            наборы</a></li>
                                                    </ul>
                                                </div>
                                                <div className="toolbar-tel">
                                                    <form action="#" className="form form-tel">
                                                        <label>Помощь в выборе курса:</label>
                                                        <div className="dropdown dropdown-languages-tel">
                                                            <a href="#" className="dropdown-button">
                                                                <img src="images/ua.jpg" alt=""/>
                                                                <span className="icon-dropdown"></span>
                                                            </a>
                                                            <div data-uk-dropdown="mode: click">
                                                                <ul className="dropdown-list">
                                                                    <li><a href="#"><img src="images/ua.jpg"
                                                                                         alt=""/></a></li>
                                                                    <li><a href="#"><img src="images/ua.jpg"
                                                                                         alt=""/></a></li>
                                                                    <li><a href="#"><img src="images/ua.jpg"
                                                                                         alt=""/></a></li>
                                                                    <li><a href="#"><img src="images/ua.jpg"
                                                                                         alt=""/></a></li>
                                                                    <li><a href="#"><img src="images/ua.jpg"
                                                                                         alt=""/></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <button className="form-icon"><span
                                                                className="icon-arrow-right"></span>
                                                            </button>
                                                            <input type="tel"
                                                                   pattern="\+[0-9]{3}\s\([0-9]{2}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}"
                                                                   data-inputmask-showmaskonhover="false"
                                                                   data-inputmask="'mask': '+380 (99) 999-99-99'"
                                                                   required/>
                                                            <label className="placeholder">Ваш номер телефона </label>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="section-body background-light">
                                <div className="container">
                                    <div className="layout layout-educational-programs-body">
                                        <div className="layout-item">
                                            <div>
                                                <div className="list list-filters">
                                                    <div className="list-item">
                                                        <div className="filter">
                                                            <div className="filter-title">Выберите направление:</div>
                                                            <div className="filter-list">
                                                                <div className="filter-item">
                                                                    <div className="filter-control">
                                                                        <label>
                                                                            <input type="checkbox"/>
                                                                            Backend разработка
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="filter-item">
                                                                    <div className="filter-control">
                                                                        <label>
                                                                            <input type="checkbox"/>
                                                                            Frontend разработка
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="filter-item">
                                                                    <div className="filter-control">
                                                                        <label>
                                                                            <input type="checkbox"/>
                                                                            Разработка моб. приложений
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="filter-item">
                                                                    <div className="filter-control">
                                                                        <label>
                                                                            <input type="checkbox"/>
                                                                            Тестирование
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="filter-item">
                                                                    <div className="filter-control">
                                                                        <label>
                                                                            <input type="checkbox"/>
                                                                            Дизайн
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="filter-item">
                                                                    <div className="filter-control">
                                                                        <label>
                                                                            <input type="checkbox"/>
                                                                            Маркетинг
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="filter-item">
                                                                    <div className="filter-control">
                                                                        <label>
                                                                            <input type="checkbox"/>
                                                                            Менеджмент
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="filter-item">
                                                                    <div className="filter-control">
                                                                        <label>
                                                                            <input type="checkbox"/>
                                                                            Продвижение сайтов
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="list-item">
                                                        <div className="filter">
                                                            <div className="filter-title">Выберите сложность:</div>
                                                            <div className="filter-list">
                                                                <div className="filter-item">
                                                                    <div className="filter-control">
                                                                        <label>
                                                                            <input type="checkbox"/>
                                                                            Начальный
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="filter-item">
                                                                    <div className="filter-control">
                                                                        <label>
                                                                            <input type="checkbox"/>
                                                                            Средний
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="filter-item">
                                                                    <div className="filter-control">
                                                                        <label>
                                                                            <input type="checkbox"/>
                                                                            Продвинутый
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="layout-item">
                                            <div className="content-filter" id="content-filter">
                                                <div>
                                                    <div className="grid grid-courses">
                                                        <div className="grid-item">
                                                            <div
                                                                className="card card-course card-hover background-primary inverse">
                                                                <div className="card-header">
                                                                    <div className="card-block">
                                                                        <h4 className="card-title"><a href="#">Java под
                                                                            Android начальный</a></h4>
                                                                        <div className="card-subtitle"><a
                                                                            href="#">Курс</a></div>
                                                                    </div>
                                                                </div>
                                                                <div className="card-body">
                                                                    <div className="card-block">
                                                                        <ul className="card-info">
                                                                            <li>
                                                                                <div className="card-info-title">Идет 2
                                                                                    набора:
                                                                                </div>
                                                                                <div className="card-info-content">
                                                                                    <ul className="list list-hyphen">
                                                                                        <li>18 августа. <a
                                                                                            className="link"
                                                                                            href="#modal-online-offline"
                                                                                            data-uk-toggle>Онлайн
                                                                                            + Оффлайн</a></li>
                                                                                        <li>24 августа. <a
                                                                                            className="link"
                                                                                            href="#modal-intensive"
                                                                                            data-uk-toggle>Интенсив</a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="card-footer">
                                                                    <div className="card-block">
                                                                        <div className="card-actions">
                                                                            <a href="#" className="button">подробнее</a>
                                                                            <span data-uk-lightbox>
                              <a href="https://www.youtube.com/watch?v=YE7VzlLtp-4" className="button-icon">
                                <span className="icon-play"></span>
                              </a>
                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="grid-item">
                                                            <div
                                                                className="card card-course card-hover background-primary inverse">
                                                                <div className="card-header">
                                                                    <div className="card-block">
                                                                        <h4 className="card-title"><a href="#">Java под
                                                                            Android начальный</a></h4>
                                                                        <div className="card-subtitle"><a
                                                                            href="#">Курс</a></div>
                                                                    </div>
                                                                </div>
                                                                <div className="card-body">
                                                                    <div className="card-block">
                                                                        <ul className="card-info">
                                                                            <li>
                                                                                <div className="card-info-title">Идет 2
                                                                                    набора:
                                                                                </div>
                                                                                <div className="card-info-content">
                                                                                    <ul className="list list-hyphen">
                                                                                        <li>18 августа. <a
                                                                                            className="link"
                                                                                            href="#modal-online-offline"
                                                                                            data-uk-toggle>Онлайн
                                                                                            + Оффлайн</a></li>
                                                                                        <li>24 августа. <a
                                                                                            className="link"
                                                                                            href="#modal-intensive"
                                                                                            data-uk-toggle>Интенсив</a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="card-footer">
                                                                    <div className="card-block">
                                                                        <div className="card-actions">
                                                                            <a href="#" className="button">подробнее</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="grid-item">
                                                            <div
                                                                className="card card-course card-hover background-primary inverse">
                                                                <div className="card-header">
                                                                    <div className="card-block">
                                                                        <h4 className="card-title"><a href="#">Java под
                                                                            Android начальный</a></h4>
                                                                        <div className="card-subtitle"><a
                                                                            href="#">Курс</a></div>
                                                                    </div>
                                                                </div>
                                                                <div className="card-body">
                                                                    <div className="card-block">
                                                                        <ul className="card-info">
                                                                            <li>
                                                                                <div className="card-info-title">Набор
                                                                                    запланирован:
                                                                                </div>
                                                                                <div className="card-info-content">на
                                                                                    Май 2018
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="card-footer">
                                                                    <div className="card-block">
                                                                        <div className="card-actions">
                                                                            <a href="#" className="button">подробнее</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="grid-item">
                                                            <div
                                                                className="card card-course card-hover background-primary inverse">
                                                                <div className="card-header">
                                                                    <div className="card-block">
                                                                        <h4 className="card-title"><a href="#">Java под
                                                                            Android начальный</a></h4>
                                                                        <div className="card-subtitle"><a
                                                                            href="#">Курс</a></div>
                                                                    </div>
                                                                </div>
                                                                <div className="card-body">
                                                                    <div className="card-block">
                                                                        <ul className="card-info">
                                                                            <li>
                                                                                <div className="card-info-title">Идет 2
                                                                                    набора:
                                                                                </div>
                                                                                <div className="card-info-content">
                                                                                    <ul className="list list-hyphen">
                                                                                        <li>18 августа. <a
                                                                                            className="link"
                                                                                            href="#modal-online-offline"
                                                                                            data-uk-toggle>Онлайн
                                                                                            + Оффлайн</a></li>
                                                                                        <li>24 августа. <a
                                                                                            className="link"
                                                                                            href="#modal-intensive"
                                                                                            data-uk-toggle>Интенсив</a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="card-footer">
                                                                    <div className="card-block">
                                                                        <div className="card-actions">
                                                                            <a href="#" className="button">подробнее</a>
                                                                            <span data-uk-lightbox>
                              <a href="https://www.youtube.com/watch?v=YE7VzlLtp-4" className="button-icon">
                                <span className="icon-play"></span>
                              </a>
                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="grid-item">
                                                            <div
                                                                className="card card-course card-hover background-primary inverse">
                                                                <div className="card-header">
                                                                    <div className="card-block">
                                                                        <h4 className="card-title"><a href="#">Java под
                                                                            Android начальный</a></h4>
                                                                        <div className="card-subtitle"><a
                                                                            href="#">Курс</a></div>
                                                                    </div>
                                                                </div>
                                                                <div className="card-body">
                                                                    <div className="card-block">
                                                                        <ul className="card-info">
                                                                            <li>
                                                                                <div className="card-info-title">Идет 2
                                                                                    набора:
                                                                                </div>
                                                                                <div className="card-info-content">
                                                                                    <ul className="list list-hyphen">
                                                                                        <li>18 августа. <a
                                                                                            className="link"
                                                                                            href="#modal-online-offline"
                                                                                            data-uk-toggle>Онлайн
                                                                                            + Оффлайн</a></li>
                                                                                        <li>24 августа. <a
                                                                                            className="link"
                                                                                            href="#modal-intensive"
                                                                                            data-uk-toggle>Интенсив</a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="card-footer">
                                                                    <div className="card-block">
                                                                        <div className="card-actions">
                                                                            <a href="#" className="button">подробнее</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="grid-item">
                                                            <div
                                                                className="card card-course card-hover background-primary inverse">
                                                                <div className="card-header">
                                                                    <div className="card-block">
                                                                        <h4 className="card-title"><a href="#">Java под
                                                                            Android начальный</a></h4>
                                                                        <div className="card-subtitle"><a
                                                                            href="#">Курс</a></div>
                                                                    </div>
                                                                </div>
                                                                <div className="card-body">
                                                                    <div className="card-block">
                                                                        <ul className="card-info">
                                                                            <li>
                                                                                <div className="card-info-title">Идет 2
                                                                                    набора:
                                                                                </div>
                                                                                <div className="card-info-content">
                                                                                    <ul className="list list-hyphen">
                                                                                        <li>18 августа. <a
                                                                                            className="link"
                                                                                            href="#modal-online-offline"
                                                                                            data-uk-toggle>Онлайн
                                                                                            + Оффлайн</a></li>
                                                                                        <li>24 августа. <a
                                                                                            className="link"
                                                                                            href="#modal-intensive"
                                                                                            data-uk-toggle>Интенсив</a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="card-footer">
                                                                    <div className="card-block">
                                                                        <div className="card-actions">
                                                                            <a href="#" className="button">подробнее</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="grid grid-sets">
                                                        <div className="grid-item">
                                                            <div className="card card-set card-hover">
                                                                <div className="card-background">
                                                                    <img src="images/teacher.png" alt=""/>
                                                                </div>
                                                                <div className="card-foreground">
                                                                    <div className="card-header">
                                                                        <div className="card-block">
                                                                            <h4 className="card-title"><a href="#">HTML/CSS
                                                                                продвинутый</a></h4>
                                                                            <div className="card-subtitle"><a href="#">Набор
                                                                                на курс</a></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="card-body">
                                                                        <div className="card-block">
                                                                            <ul className="card-info">
                                                                                <li>
                                                                                    <div className="card-info-title">
                                                                                        Стоимость:
                                                                                    </div>
                                                                                    <div className="card-info-content">
                                                                                        7500 грн
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div className="card-info-title">
                                                                                        Формат:
                                                                                    </div>
                                                                                    <div className="card-info-content">
                                                                                        <a href="#modal-intensive-intensity"
                                                                                           data-uk-toggle
                                                                                           className="link">Очный
                                                                                            вечерний
                                                                                        </a>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div className="card-info-title">
                                                                                        Старт курса:
                                                                                    </div>
                                                                                    <div className="card-info-content">
                                                                                        28 мая 2017
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div className="card-info-title">
                                                                                        Длительность:
                                                                                    </div>
                                                                                    <div className="card-info-content">3
                                                                                        мес / 24
                                                                                        занятия
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div className="card-info-title">
                                                                                        Осталось
                                                                                        мест:
                                                                                    </div>
                                                                                    <div className="card-info-content">3
                                                                                        из 15
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div className="card-info-title">
                                                                                        Ментор:
                                                                                    </div>
                                                                                    <a href="#"
                                                                                       className="card-info-content">Виталий
                                                                                        Еременко
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <div className="card-info-title">
                                                                                        Опыт работы:
                                                                                    </div>
                                                                                    <div className="card-info-content">9
                                                                                        лет
                                                                                    </div>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="card-footer">
                                                                        <div className="card-block">
                                                                            <div className="card-actions">
                                                                                <a href="#" className="button">Подробнее
                                                                                    о курсе</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="grid-item">
                                                            <div className="card card-set card-hover">
                                                                <div className="card-background">
                                                                    <img src="images/teacher.png" alt=""/>
                                                                </div>
                                                                <div className="card-foreground">
                                                                    <div className="card-header">
                                                                        <div className="card-block">
                                                                            <h4 className="card-title"><a href="#">HTML/CSS
                                                                                продвинутый</a></h4>
                                                                            <div className="card-subtitle"><a href="#">Набор
                                                                                на курс</a></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="card-body">
                                                                        <div className="card-block">
                                                                            <ul className="card-info">
                                                                                <li>
                                                                                    <div className="card-info-title">
                                                                                        Стоимость:
                                                                                    </div>
                                                                                    <div className="card-info-content">
                                                                                        7500 грн
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div className="card-info-title">
                                                                                        Формат:
                                                                                    </div>
                                                                                    <div className="card-info-content">
                                                                                        <a href="#modal-intensive-intensity"
                                                                                           data-uk-toggle
                                                                                           className="link">Очный
                                                                                            вечерний
                                                                                        </a>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div className="card-info-title">
                                                                                        Старт курса:
                                                                                    </div>
                                                                                    <div className="card-info-content">
                                                                                        28 мая 2017
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div className="card-info-title">
                                                                                        Длительность:
                                                                                    </div>
                                                                                    <div className="card-info-content">3
                                                                                        мес / 24
                                                                                        занятия
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div className="card-info-title">
                                                                                        Осталось
                                                                                        мест:
                                                                                    </div>
                                                                                    <div className="card-info-content">3
                                                                                        из 15
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div className="card-info-title">
                                                                                        Ментор:
                                                                                    </div>
                                                                                    <a href="#"
                                                                                       className="card-info-content">Виталий
                                                                                        Еременко
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <div className="card-info-title">
                                                                                        Опыт работы:
                                                                                    </div>
                                                                                    <div className="card-info-content">9
                                                                                        лет
                                                                                    </div>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="card-footer">
                                                                        <div className="card-block">
                                                                            <div className="card-actions">
                                                                                <a href="#" className="button">Подробнее
                                                                                    о курсе</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="grid-item">
                                                            <div className="card card-set card-hover">
                                                                <div className="card-background">
                                                                    <img src="images/teacher.png" alt=""/>
                                                                </div>
                                                                <div className="card-foreground">
                                                                    <div className="card-header">
                                                                        <div className="card-block">
                                                                            <h4 className="card-title"><a href="#">HTML/CSS
                                                                                продвинутый</a></h4>
                                                                            <div className="card-subtitle"><a href="#">Набор
                                                                                на курс</a></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="card-body">
                                                                        <div className="card-block">
                                                                            <ul className="card-info">
                                                                                <li>
                                                                                    <div className="card-info-title">
                                                                                        Стоимость:
                                                                                    </div>
                                                                                    <div className="card-info-content">
                                                                                        7500 грн
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div className="card-info-title">
                                                                                        Формат:
                                                                                    </div>
                                                                                    <div className="card-info-content">
                                                                                        <a href="#modal-intensive-intensity"
                                                                                           data-uk-toggle
                                                                                           className="link">Очный
                                                                                            вечерний
                                                                                        </a>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div className="card-info-title">
                                                                                        Старт курса:
                                                                                    </div>
                                                                                    <div className="card-info-content">
                                                                                        28 мая 2017
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div className="card-info-title">
                                                                                        Длительность:
                                                                                    </div>
                                                                                    <div className="card-info-content">3
                                                                                        мес / 24
                                                                                        занятия
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div className="card-info-title">
                                                                                        Осталось
                                                                                        мест:
                                                                                    </div>
                                                                                    <div className="card-info-content">3
                                                                                        из 15
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div className="card-info-title">
                                                                                        Ментор:
                                                                                    </div>
                                                                                    <a href="#"
                                                                                       className="card-info-content">Виталий
                                                                                        Еременко
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <div className="card-info-title">
                                                                                        Опыт работы:
                                                                                    </div>
                                                                                    <div className="card-info-content">9
                                                                                        лет
                                                                                    </div>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="card-footer">
                                                                        <div className="card-block">
                                                                            <div className="card-actions">
                                                                                <a href="#" className="button">Подробнее
                                                                                    о курсе</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="grid-item">
                                                            <div className="card card-set card-hover">
                                                                <div className="card-background">
                                                                    <img src="images/teacher.png" alt=""/>
                                                                </div>
                                                                <div className="card-foreground">
                                                                    <div className="card-header">
                                                                        <div className="card-block">
                                                                            <h4 className="card-title"><a href="#">HTML/CSS
                                                                                продвинутый</a></h4>
                                                                            <div className="card-subtitle"><a href="#">Набор
                                                                                на курс</a></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="card-body">
                                                                        <div className="card-block">
                                                                            <ul className="card-info">
                                                                                <li>
                                                                                    <div className="card-info-title">
                                                                                        Стоимость:
                                                                                    </div>
                                                                                    <div className="card-info-content">
                                                                                        7500 грн
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div className="card-info-title">
                                                                                        Формат:
                                                                                    </div>
                                                                                    <div className="card-info-content">
                                                                                        <a href="#modal-intensive-intensity"
                                                                                           data-uk-toggle
                                                                                           className="link">Очный
                                                                                            вечерний
                                                                                        </a>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div className="card-info-title">
                                                                                        Старт курса:
                                                                                    </div>
                                                                                    <div className="card-info-content">
                                                                                        28 мая 2017
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div className="card-info-title">
                                                                                        Длительность:
                                                                                    </div>
                                                                                    <div className="card-info-content">3
                                                                                        мес / 24
                                                                                        занятия
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div className="card-info-title">
                                                                                        Осталось
                                                                                        мест:
                                                                                    </div>
                                                                                    <div className="card-info-content">3
                                                                                        из 15
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div className="card-info-title">
                                                                                        Ментор:
                                                                                    </div>
                                                                                    <a href="#"
                                                                                       className="card-info-content">Виталий
                                                                                        Еременко
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <div className="card-info-title">
                                                                                        Опыт работы:
                                                                                    </div>
                                                                                    <div className="card-info-content">9
                                                                                        лет
                                                                                    </div>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="card-footer">
                                                                        <div className="card-block">
                                                                            <div className="card-actions">
                                                                                <a href="#" className="button">Подробнее
                                                                                    о курсе</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="section-footer">
                                <div className="newsletter newsletter-educational-programs">
                                    <div className="container">
                                        <div className="newsletter-container">
                                            <div className="sale">
                                                <span className="sale-value">-5</span>
                                                <span className="sale-symbol">%</span>
                                                <span className="sale-description">Подпишись на рассылку и будь в курсе появления новых курсов и наборов, а также получи скидку 5% на любой курс. </span>
                                            </div>
                                            <form action="#" className="form form-newsletter">
                                                <div className="form-group">
                                                    <input type="text" minlength="4" required/>
                                                    <label className="placeholder">Имя</label>
                                                </div>
                                                <div className="form-group">
                                                    <input type="email"
                                                           pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" required/>
                                                    <label className="placeholder">E-mail</label>
                                                </div>
                                                <div className="form-group-button">
                                                    <button className="button button-outline">Подписаться</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section section-reviews" id="section-reviews">
                        <div className="section-foreground">
                            <div className="section-body">
                                <div className="container">
                                    <div className="layout layout-reviews">
                                        <div className="layout-item">
                                            <div className="heading">
                                                <h2 className="heading-title">Отзывы выпускников</h2>
                                                <div className="heading-description">
                                                    Мы всегда развиваем наши методы обучения и программы, на что в
                                                    первую очередь
                                                    влияет мнения наших студентов.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="layout-item">
                                            <div className="swiper-container swiper-reviews">
                                                <div className="swiper-wrapper grid grid-reviews">
                                                    <div className="grid-item swiper-slide">
                                                        <div className="card card-review">
                                                            <div className="card-header">
                                                                <div className="author author-review">
                                                                    <div className="avatar-left">
                                                                        <div className="author-avatar">
                                                                            <img src="images/img-2.png" alt=""/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="avatar-body">
                                                                        <div className="author-name">Амалия Робертовна
                                                                        </div>
                                                                        <ul className="socials-list">
                                                                            <li>
                                                                                <a href="#" className="social">
                                                                                    <span
                                                                                        className="icon-facebook"></span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#" className="social">
                                                                                    <span
                                                                                        className="icon-behance"></span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card-body">
                                                                <div className="card-block">
                                                                    <div className="card-heading">
                                                                        <h3 className="card-title">
                                                                            «Хотелось чтоб работа была не только хорошим
                                                                            заработком, но и
                                                                            приносила какое-то моральное удовлетворение»
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                                <div className="card-block">
                                                                    <div className="card-description">
                                                                        «Проработав на своей работе около 3х лет поняла,
                                                                        то хочу
                                                                        заниматься совсем другим, хотелось чтоб работа
                                                                        была не только
                                                                        хорошим заработком,но и приносила какое-то
                                                                        моральное
                                                                        удовлетворение. Я решилась пойти на курсы
                                                                        веб-дизайна интенсив,
                                                                        т.е освоить дизайн
                                                                        за 1 месяц.»
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="grid-item swiper-slide">
                                                        <div className="card card-review">
                                                            <div className="card-header">
                                                                <div className="author author-review">
                                                                    <div className="avatar-left">
                                                                        <div className="author-avatar">
                                                                            <img src="images/img-2.png" alt=""/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="avatar-body">
                                                                        <div className="author-name">Амалия Робертовна
                                                                        </div>
                                                                        <ul className="socials-list">
                                                                            <li>
                                                                                <a href="#" className="social">
                                                                                    <span
                                                                                        className="icon-facebook"></span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#" className="social">
                                                                                    <span
                                                                                        className="icon-behance"></span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card-body">
                                                                <div className="card-block">
                                                                    <div className="card-heading">
                                                                        <h3 className="card-title">
                                                                            «Хотелось чтоб работа была не только хорошим
                                                                            заработком, но и
                                                                            приносила какое-то моральное удовлетворение»
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                                <div className="card-block">
                                                                    <div className="card-description">
                                                                        «Проработав на своей работе около 3х лет поняла,
                                                                        то хочу
                                                                        заниматься совсем другим, хотелось чтоб работа
                                                                        была не только
                                                                        хорошим заработком,но и приносила какое-то
                                                                        моральное
                                                                        удовлетворение. Я решилась пойти на курсы
                                                                        веб-дизайна интенсив,
                                                                        т.е освоить дизайн
                                                                        за 1 месяц.»
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="grid-item swiper-slide">
                                                        <div className="card card-review">
                                                            <div className="card-header">
                                                                <div className="author author-review">
                                                                    <div className="avatar-left">
                                                                        <div className="author-avatar">
                                                                            <img src="images/img-2.png" alt=""/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="avatar-body">
                                                                        <div className="author-name">Амалия Робертовна
                                                                        </div>
                                                                        <ul className="socials-list">
                                                                            <li>
                                                                                <a href="#" className="social">
                                                                                    <span
                                                                                        className="icon-facebook"></span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#" className="social">
                                                                                    <span
                                                                                        className="icon-behance"></span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card-body">
                                                                <div className="card-block">
                                                                    <div className="card-heading">
                                                                        <h3 className="card-title">
                                                                            «Хотелось чтоб работа была не только хорошим
                                                                            заработком, но и
                                                                            приносила какое-то моральное удовлетворение»
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                                <div className="card-block">
                                                                    <div className="card-description">
                                                                        «Проработав на своей работе около 3х лет поняла,
                                                                        то хочу
                                                                        заниматься совсем другим, хотелось чтоб работа
                                                                        была не только
                                                                        хорошим заработком,но и приносила какое-то
                                                                        моральное
                                                                        удовлетворение. Я решилась пойти на курсы
                                                                        веб-дизайна интенсив,
                                                                        т.е освоить дизайн
                                                                        за 1 месяц.»
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="grid-item swiper-slide">
                                                        <div className="card card-review">
                                                            <div className="card-header">
                                                                <div className="author author-review">
                                                                    <div className="avatar-left">
                                                                        <div className="author-avatar">
                                                                            <img src="images/img-2.png" alt=""/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="avatar-body">
                                                                        <div className="author-name">Амалия Робертовна
                                                                        </div>
                                                                        <ul className="socials-list">
                                                                            <li>
                                                                                <a href="#" className="social">
                                                                                    <span
                                                                                        className="icon-facebook"></span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#" className="social">
                                                                                    <span
                                                                                        className="icon-behance"></span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card-body">
                                                                <div className="card-block">
                                                                    <div className="card-heading">
                                                                        <h3 className="card-title">
                                                                            «Хотелось чтоб работа была не только хорошим
                                                                            заработком, но и
                                                                            приносила какое-то моральное удовлетворение»
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                                <div className="card-block">
                                                                    <div className="card-description">
                                                                        «Проработав на своей работе около 3х лет поняла,
                                                                        то хочу
                                                                        заниматься совсем другим, хотелось чтоб работа
                                                                        была не только
                                                                        хорошим заработком,но и приносила какое-то
                                                                        моральное
                                                                        удовлетворение. Я решилась пойти на курсы
                                                                        веб-дизайна интенсив,
                                                                        т.е освоить дизайн
                                                                        за 1 месяц.»
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="grid-item swiper-slide">
                                                        <div className="card card-review">
                                                            <div className="card-header">
                                                                <div className="author author-review">
                                                                    <div className="avatar-left">
                                                                        <div className="author-avatar">
                                                                            <img src="images/img-2.png" alt=""/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="avatar-body">
                                                                        <div className="author-name">Амалия Робертовна
                                                                        </div>
                                                                        <ul className="socials-list">
                                                                            <li>
                                                                                <a href="#" className="social">
                                                                                    <span
                                                                                        className="icon-facebook"></span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#" className="social">
                                                                                    <span
                                                                                        className="icon-behance"></span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card-body">
                                                                <div className="card-block">
                                                                    <div className="card-heading">
                                                                        <h3 className="card-title">
                                                                            «Хотелось чтоб работа была не только хорошим
                                                                            заработком, но и
                                                                            приносила какое-то моральное удовлетворение»
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                                <div className="card-block">
                                                                    <div className="card-description">
                                                                        «Проработав на своей работе около 3х лет поняла,
                                                                        то хочу
                                                                        заниматься совсем другим, хотелось чтоб работа
                                                                        была не только
                                                                        хорошим заработком,но и приносила какое-то
                                                                        моральное
                                                                        удовлетворение. Я решилась пойти на курсы
                                                                        веб-дизайна интенсив,
                                                                        т.е освоить дизайн
                                                                        за 1 месяц.»
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="grid-item swiper-slide">
                                                        <div className="card card-review">
                                                            <div className="card-header">
                                                                <div className="author author-review">
                                                                    <div className="avatar-left">
                                                                        <div className="author-avatar">
                                                                            <img src="images/img-2.png" alt=""/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="avatar-body">
                                                                        <div className="author-name">Амалия Робертовна
                                                                        </div>
                                                                        <ul className="socials-list">
                                                                            <li>
                                                                                <a href="#" className="social">
                                                                                    <span
                                                                                        className="icon-facebook"></span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#" className="social">
                                                                                    <span
                                                                                        className="icon-behance"></span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card-body">
                                                                <div className="card-block">
                                                                    <div className="card-heading">
                                                                        <h3 className="card-title">
                                                                            «Хотелось чтоб работа была не только хорошим
                                                                            заработком, но и
                                                                            приносила какое-то моральное удовлетворение»
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                                <div className="card-block">
                                                                    <div className="card-description">
                                                                        «Проработав на своей работе около 3х лет поняла,
                                                                        то хочу
                                                                        заниматься совсем другим, хотелось чтоб работа
                                                                        была не только
                                                                        хорошим заработком,но и приносила какое-то
                                                                        моральное
                                                                        удовлетворение. Я решилась пойти на курсы
                                                                        веб-дизайна интенсив,
                                                                        т.е освоить дизайн
                                                                        за 1 месяц.»
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="grid-item swiper-slide">
                                                        <div className="card card-review">
                                                            <div className="card-header">
                                                                <div className="author author-review">
                                                                    <div className="avatar-left">
                                                                        <div className="author-avatar">
                                                                            <img src="images/img-2.png" alt=""/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="avatar-body">
                                                                        <div className="author-name">Амалия Робертовна
                                                                        </div>
                                                                        <ul className="socials-list">
                                                                            <li>
                                                                                <a href="#" className="social">
                                                                                    <span
                                                                                        className="icon-facebook"></span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#" className="social">
                                                                                    <span
                                                                                        className="icon-behance"></span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card-body">
                                                                <div className="card-block">
                                                                    <div className="card-heading">
                                                                        <h3 className="card-title">
                                                                            «Хотелось чтоб работа была не только хорошим
                                                                            заработком, но и
                                                                            приносила какое-то моральное удовлетворение»
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                                <div className="card-block">
                                                                    <div className="card-description">
                                                                        «Проработав на своей работе около 3х лет поняла,
                                                                        то хочу
                                                                        заниматься совсем другим, хотелось чтоб работа
                                                                        была не только
                                                                        хорошим заработком,но и приносила какое-то
                                                                        моральное
                                                                        удовлетворение. Я решилась пойти на курсы
                                                                        веб-дизайна интенсив,
                                                                        т.е освоить дизайн
                                                                        за 1 месяц.»
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="grid-item swiper-slide">
                                                        <div className="card card-review">
                                                            <div className="card-header">
                                                                <div className="author author-review">
                                                                    <div className="avatar-left">
                                                                        <div className="author-avatar">
                                                                            <img src="images/img-2.png" alt=""/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="avatar-body">
                                                                        <div className="author-name">Амалия Робертовна
                                                                        </div>
                                                                        <ul className="socials-list">
                                                                            <li>
                                                                                <a href="#" className="social">
                                                                                    <span
                                                                                        className="icon-facebook"></span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#" className="social">
                                                                                    <span
                                                                                        className="icon-behance"></span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card-body">
                                                                <div className="card-block">
                                                                    <div className="card-heading">
                                                                        <h3 className="card-title">
                                                                            «Хотелось чтоб работа была не только хорошим
                                                                            заработком, но и
                                                                            приносила какое-то моральное удовлетворение»
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                                <div className="card-block">
                                                                    <div className="card-description">
                                                                        «Проработав на своей работе около 3х лет поняла,
                                                                        то хочу
                                                                        заниматься совсем другим, хотелось чтоб работа
                                                                        была не только
                                                                        хорошим заработком,но и приносила какое-то
                                                                        моральное
                                                                        удовлетворение. Я решилась пойти на курсы
                                                                        веб-дизайна интенсив,
                                                                        т.е освоить дизайн
                                                                        за 1 месяц.»
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section section-posts" id="section-posts">
                        <div className="section-foreground">
                            <div className="section-body">
                                <div className="container">
                                    <div className="layout layout-posts">
                                        <div className="layout-item">
                                            <div className="heading">
                                                <h2 className="heading-title">Выпускники, которые успешно работают</h2>
                                            </div>
                                        </div>
                                        <div className="layout-item">
                                            <a href="#">Смотреть все истории успеха</a>
                                        </div>
                                        <div className="layout-item">
                                            <div className="grid grid-posts">
                                                <div className="grid-item">
                                                    <a href="#" className="card card-post card-post-modify">
                                                        <div className="card-body">
                                                            <div className="card-block">
                                                                <div className="card-date"><span
                                                                    className="icon-calendar-o"></span> 12 июня 2017
                                                                </div>
                                                            </div>
                                                            <div className="card-block">
                                                                <div className="card-heading">
                                                                    <h3 className="card-title">Студентка Spalah, которая
                                                                        нашла работу в IT после 30</h3>
                                                                </div>
                                                            </div>
                                                            <div className="card-block">
                                                                <div className="card-description">
                                                                    <p>HR-менеджер с 10-летним опытом Анна
                                                                        Помазкова решила сменить сферу деятельности в 31
                                                                        год. Подучила
                                                                        английский, закончила курс IT-рекрутинга в
                                                                        Spalah-IT-School и
                                                                        получила желаемую работу. Анна рассказала нам,
                                                                        как она стала
                                                                        рекрутером в Volo
                                                                        Global и что ей помогает переносить отказы</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-block">
                          <span className="card-fullname">
                            <span className="card-name">Анна</span>
                            <span className="card-lastname">Помазкова,</span>
                          </span>
                                                                <span
                                                                    className="card-position">рекрутер в Volo Global</span>
                                                            </div>
                                                            <div className="card-block">
                                                                <div className="card-image">
                                                                    <img src="images/img-post-1.jpg" alt=""/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="grid-item">
                                                    <a href="#" className="card card-post card-post-modify">
                                                        <div className="card-body">
                                                            <div className="card-block">
                                                                <div className="card-date"><span
                                                                    className="icon-calendar-o"></span> 12 июня 2017
                                                                </div>
                                                            </div>
                                                            <div className="card-block">
                                                                <div className="card-heading">
                                                                    <h3 className="card-title">Студентка Spalah, которая
                                                                        нашла работу в IT после 30</h3>
                                                                </div>
                                                            </div>
                                                            <div className="card-block">
                                                                <div className="card-description">
                                                                    <p>HR-менеджер с 10-летним опытом Анна
                                                                        Помазкова решила сменить сферу деятельности в 31
                                                                        год. Подучила
                                                                        английский, закончила курс IT-рекрутинга в
                                                                        Spalah-IT-School и
                                                                        получила желаемую работу. Анна рассказала нам,
                                                                        как она стала
                                                                        рекрутером в Volo
                                                                        Global и что ей помогает переносить отказы</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-block">
                          <span className="card-fullname">
                            <span className="card-name">Анна</span>
                            <span className="card-lastname">Помазкова,</span>
                          </span>
                                                                <span
                                                                    className="card-position">рекрутер в Volo Global</span>
                                                            </div>
                                                            <div className="card-block">
                                                                <div className="card-image">
                                                                    <img src="images/img-post-1.jpg" alt=""/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="grid-item">
                                                    <a href="#" className="card card-post card-post-modify">
                                                        <div className="card-body">
                                                            <div className="card-block">
                                                                <div className="card-date"><span
                                                                    className="icon-calendar-o"></span> 12 июня 2017
                                                                </div>
                                                            </div>
                                                            <div className="card-block">
                                                                <div className="card-heading">
                                                                    <h3 className="card-title">Студентка Spalah, которая
                                                                        нашла работу в IT после 30</h3>
                                                                </div>
                                                            </div>
                                                            <div className="card-block">
                                                                <div className="card-description">
                                                                    <p>HR-менеджер с 10-летним опытом Анна
                                                                        Помазкова решила сменить сферу деятельности в 31
                                                                        год. Подучила
                                                                        английский, закончила курс IT-рекрутинга в
                                                                        Spalah-IT-School и
                                                                        получила желаемую работу. Анна рассказала нам,
                                                                        как она стала
                                                                        рекрутером в Volo
                                                                        Global и что ей помогает переносить отказы</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-block">
                          <span className="card-fullname">
                            <span className="card-name">Анна</span>
                            <span className="card-lastname">Помазкова,</span>
                          </span>
                                                                <span
                                                                    className="card-position">рекрутер в Volo Global</span>
                                                            </div>
                                                            <div className="card-block">
                                                                <div className="card-image">
                                                                    <img src="images/img-post-1.jpg" alt=""/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section section-events" id="section-events">
                        <div className="section-foreground">
                            <div className="section-body">
                                <div className="container">
                                    <div className="layout layout-events">
                                        <div className="layout-item">
                                            <div className="heading">
                                                <h2 className="heading-title">Мероприятия</h2>
                                            </div>
                                        </div>
                                        <div className="layout-item">
                                            <a href="#">Смотреть все мероприятия</a>
                                        </div>
                                        <div className="layout-item">
                                            <div className="swiper-container swiper-events swiper-modify">
                                                <div className="swiper-wrapper grid grid-events">
                                                    <div className="grid-item swiper-slide">
                                                        <a href="#" className="card card-event card-hover is-past">
                                                            <div className="card-header">
                                                                <div className="card-block">
                                                                    <div className="card-date">
                                                                        <div className="card-date-left">
                                                                            <span className="card-date-day">04</span>
                                                                        </div>
                                                                        <div className="card-date-body">
                                                                            <span
                                                                                className="card-date-month">Июня</span>
                                                                            <span className="card-date-year">2017</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card-body">
                                                                <div className="card-block">
                                                                    <div className="card-subtitle">Вебинар</div>
                                                                    <h3 className="card-title">Встреча HoloLens Meetup:
                                                                        Holograms, Unity and Challenges of Mixed
                                                                        Reality</h3>
                                                                </div>
                                                                <div className="card-block">
                                                                    <ul className="card-info">
                                                                        <li>
                                                                            <span
                                                                                className="card-info-title">Спикер:</span>
                                                                            <span className="card-info-content">Сергей Жадан</span>
                                                                        </li>
                                                                        <li>
                                                                            <span
                                                                                className="card-info-title">Место:</span>
                                                                            <span className="card-info-content">ул.Девичья 6, Харьков</span>
                                                                        </li>
                                                                        <li>
                                                                            <span
                                                                                className="card-info-title">Начало:</span>
                                                                            <span
                                                                                className="card-info-content">19:00</span>
                                                                        </li>
                                                                        <li>
                                                                            <span
                                                                                className="card-info-title">Стоимость:</span>
                                                                            <span className="card-info-content">бесплатно</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="grid-item swiper-slide">
                                                        <a href="#" className="card card-event card-hover">
                                                            <div className="card-header">
                                                                <div className="card-block">
                                                                    <div className="card-date">
                                                                        <div className="card-date-left">
                                                                            <span className="card-date-day">04</span>
                                                                        </div>
                                                                        <div className="card-date-body">
                                                                            <span
                                                                                className="card-date-month">Июня</span>
                                                                            <span className="card-date-year">2017</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card-body">
                                                                <div className="card-block">
                                                                    <div className="card-subtitle">Вебинар</div>
                                                                    <h3 className="card-title">Встреча HoloLens Meetup:
                                                                        Holograms, Unity and Challenges of Mixed
                                                                        Reality</h3>
                                                                </div>
                                                                <div className="card-block">
                                                                    <ul className="card-info">
                                                                        <li>
                                                                            <span
                                                                                className="card-info-title">Спикер:</span>
                                                                            <span className="card-info-content">Сергей Жадан</span>
                                                                        </li>
                                                                        <li>
                                                                            <span
                                                                                className="card-info-title">Место:</span>
                                                                            <span className="card-info-content">ул.Девичья 6, Харьков</span>
                                                                        </li>
                                                                        <li>
                                                                            <span
                                                                                className="card-info-title">Начало:</span>
                                                                            <span
                                                                                className="card-info-content">19:00</span>
                                                                        </li>
                                                                        <li>
                                                                            <span
                                                                                className="card-info-title">Стоимость:</span>
                                                                            <span className="card-info-content">бесплатно</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="grid-item swiper-slide">
                                                        <a href="#" className="card card-event card-hover">
                                                            <div className="card-header">
                                                                <div className="card-block">
                                                                    <div className="card-date">
                                                                        <div className="card-date-left">
                                                                            <span className="card-date-day">04</span>
                                                                        </div>
                                                                        <div className="card-date-body">
                                                                            <span
                                                                                className="card-date-month">Июня</span>
                                                                            <span className="card-date-year">2017</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card-body">
                                                                <div className="card-block">
                                                                    <div className="card-subtitle">Вебинар</div>
                                                                    <h3 className="card-title">Встреча HoloLens Meetup:
                                                                        Holograms, Unity and Challenges of Mixed
                                                                        Reality</h3>
                                                                </div>
                                                                <div className="card-block">
                                                                    <ul className="card-info">
                                                                        <li>
                                                                            <span
                                                                                className="card-info-title">Спикер:</span>
                                                                            <span className="card-info-content">Сергей Жадан</span>
                                                                        </li>
                                                                        <li>
                                                                            <span
                                                                                className="card-info-title">Место:</span>
                                                                            <span className="card-info-content">ул.Девичья 6, Харьков</span>
                                                                        </li>
                                                                        <li>
                                                                            <span
                                                                                className="card-info-title">Начало:</span>
                                                                            <span
                                                                                className="card-info-content">19:00</span>
                                                                        </li>
                                                                        <li>
                                                                            <span
                                                                                className="card-info-title">Стоимость:</span>
                                                                            <span className="card-info-content">бесплатно</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="grid-item swiper-slide">
                                                        <a href="#" className="card card-event card-hover">
                                                            <div className="card-header">
                                                                <div className="card-block">
                                                                    <div className="card-date">
                                                                        <div className="card-date-left">
                                                                            <span className="card-date-day">04</span>
                                                                        </div>
                                                                        <div className="card-date-body">
                                                                            <span
                                                                                className="card-date-month">Июня</span>
                                                                            <span className="card-date-year">2017</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card-body">
                                                                <div className="card-block">
                                                                    <div className="card-subtitle">Вебинар</div>
                                                                    <h3 className="card-title">Встреча HoloLens Meetup:
                                                                        Holograms, Unity and Challenges of Mixed
                                                                        Reality</h3>
                                                                </div>
                                                                <div className="card-block">
                                                                    <ul className="card-info">
                                                                        <li>
                                                                            <span
                                                                                className="card-info-title">Спикер:</span>
                                                                            <span className="card-info-content">Сергей Жадан</span>
                                                                        </li>
                                                                        <li>
                                                                            <span
                                                                                className="card-info-title">Место:</span>
                                                                            <span className="card-info-content">ул.Девичья 6, Харьков</span>
                                                                        </li>
                                                                        <li>
                                                                            <span
                                                                                className="card-info-title">Начало:</span>
                                                                            <span
                                                                                className="card-info-content">19:00</span>
                                                                        </li>
                                                                        <li>
                                                                            <span
                                                                                className="card-info-title">Стоимость:</span>
                                                                            <span className="card-info-content">бесплатно</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="grid-item swiper-slide">
                                                        <a href="#" className="card card-event card-hover">
                                                            <div className="card-header">
                                                                <div className="card-block">
                                                                    <div className="card-date">
                                                                        <div className="card-date-left">
                                                                            <span className="card-date-day">04</span>
                                                                        </div>
                                                                        <div className="card-date-body">
                                                                            <span
                                                                                className="card-date-month">Июня</span>
                                                                            <span className="card-date-year">2017</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card-body">
                                                                <div className="card-block">
                                                                    <div className="card-subtitle">Вебинар</div>
                                                                    <h3 className="card-title">Встреча HoloLens Meetup:
                                                                        Holograms, Unity and Challenges of Mixed
                                                                        Reality</h3>
                                                                </div>
                                                                <div className="card-block">
                                                                    <ul className="card-info">
                                                                        <li>
                                                                            <span
                                                                                className="card-info-title">Спикер:</span>
                                                                            <span className="card-info-content">Сергей Жадан</span>
                                                                        </li>
                                                                        <li>
                                                                            <span
                                                                                className="card-info-title">Место:</span>
                                                                            <span className="card-info-content">ул.Девичья 6, Харьков</span>
                                                                        </li>
                                                                        <li>
                                                                            <span
                                                                                className="card-info-title">Начало:</span>
                                                                            <span
                                                                                className="card-info-content">19:00</span>
                                                                        </li>
                                                                        <li>
                                                                            <span
                                                                                className="card-info-title">Стоимость:</span>
                                                                            <span className="card-info-content">бесплатно</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="grid-item swiper-slide">
                                                        <a href="#" className="card card-event card-hover">
                                                            <div className="card-header">
                                                                <div className="card-block">
                                                                    <div className="card-date">
                                                                        <div className="card-date-left">
                                                                            <span className="card-date-day">04</span>
                                                                        </div>
                                                                        <div className="card-date-body">
                                                                            <span
                                                                                className="card-date-month">Июня</span>
                                                                            <span className="card-date-year">2017</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card-body">
                                                                <div className="card-block">
                                                                    <div className="card-subtitle">Вебинар</div>
                                                                    <h3 className="card-title">Встреча HoloLens Meetup:
                                                                        Holograms, Unity and Challenges of Mixed
                                                                        Reality</h3>
                                                                </div>
                                                                <div className="card-block">
                                                                    <ul className="card-info">
                                                                        <li>
                                                                            <span
                                                                                className="card-info-title">Спикер:</span>
                                                                            <span className="card-info-content">Сергей Жадан</span>
                                                                        </li>
                                                                        <li>
                                                                            <span
                                                                                className="card-info-title">Место:</span>
                                                                            <span className="card-info-content">ул.Девичья 6, Харьков</span>
                                                                        </li>
                                                                        <li>
                                                                            <span
                                                                                className="card-info-title">Начало:</span>
                                                                            <span
                                                                                className="card-info-content">19:00</span>
                                                                        </li>
                                                                        <li>
                                                                            <span
                                                                                className="card-info-title">Стоимость:</span>
                                                                            <span className="card-info-content">бесплатно</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="grid-item swiper-slide">
                                                        <a href="#" className="card card-event card-hover">
                                                            <div className="card-header">
                                                                <div className="card-block">
                                                                    <div className="card-date">
                                                                        <div className="card-date-left">
                                                                            <span className="card-date-day">04</span>
                                                                        </div>
                                                                        <div className="card-date-body">
                                                                            <span
                                                                                className="card-date-month">Июня</span>
                                                                            <span className="card-date-year">2017</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card-body">
                                                                <div className="card-block">
                                                                    <div className="card-subtitle">Вебинар</div>
                                                                    <h3 className="card-title">Встреча HoloLens Meetup:
                                                                        Holograms, Unity and Challenges of Mixed
                                                                        Reality</h3>
                                                                </div>
                                                                <div className="card-block">
                                                                    <ul className="card-info">
                                                                        <li>
                                                                            <span
                                                                                className="card-info-title">Спикер:</span>
                                                                            <span className="card-info-content">Сергей Жадан</span>
                                                                        </li>
                                                                        <li>
                                                                            <span
                                                                                className="card-info-title">Место:</span>
                                                                            <span className="card-info-content">ул.Девичья 6, Харьков</span>
                                                                        </li>
                                                                        <li>
                                                                            <span
                                                                                className="card-info-title">Начало:</span>
                                                                            <span
                                                                                className="card-info-content">19:00</span>
                                                                        </li>
                                                                        <li>
                                                                            <span
                                                                                className="card-info-title">Стоимость:</span>
                                                                            <span className="card-info-content">бесплатно</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="swiper-buttons swiper-buttons-second">
                                                    <div className="swiper-button-prev"></div>
                                                    <div className="swiper-button-next"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section section-posts-secondary" id="section-posts-secondary">
                        <div className="section-foreground">
                            <div className="section-body">
                                <div className="container">
                                    <div className="layout layout-posts-secondary">
                                        <div className="layout-item">
                                            <div className="heading">
                                                <h2 className="heading-title">Последнее из блога</h2>
                                            </div>
                                        </div>
                                        <div className="layout-item">
                                            <a href="#">Смотреть все новости</a>
                                        </div>
                                        <div className="layout-item">
                                            <div className="grid grid-posts-secondary">
                                                <div className="grid-item">
                                                    <a href="#"
                                                       className="card card-post card-post-secondary card-post-modify">
                                                        <div className="card-body">
                                                            <div className="card-block">
                                                                <div className="card-date"><span
                                                                    className="icon-calendar-o"></span> 12 июня 2017
                                                                </div>
                                                            </div>
                                                            <div className="card-block">
                                                                <h3 className="card-title">Топ-5 ошибок при заполнении
                                                                    профиля на бирже фриланса</h3>
                                                            </div>
                                                            <div className="card-block">
                                                                <div className="tags">
                                                                    <span className="tag"># База знаний</span>
                                                                </div>
                                                            </div>
                                                            <div className="card-block">
                                                                <div className="card-image">
                                                                    <img src="images/img-post-1.jpg" alt=""/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="grid-item">
                                                    <a href="#"
                                                       className="card card-post card-post-secondary card-post-modify">
                                                        <div className="card-body">
                                                            <div className="card-block">
                                                                <div className="card-date"><span
                                                                    className="icon-calendar-o"></span> 12 июня 2017
                                                                </div>
                                                            </div>
                                                            <div className="card-block">
                                                                <h3 className="card-title">Топ-5 ошибок при заполнении
                                                                    профиля на бирже фриланса</h3>
                                                            </div>
                                                            <div className="card-block">
                                                                <div className="tags">
                                                                    <span className="tag"># База знаний</span>
                                                                </div>
                                                            </div>
                                                            <div className="card-block">
                                                                <div className="card-image">
                                                                    <img src="images/img-post-1.jpg" alt=""/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="grid-item">
                                                    <a href="#"
                                                       className="card card-post card-post-secondary card-post-modify">
                                                        <div className="card-body">
                                                            <div className="card-block">
                                                                <div className="card-date"><span
                                                                    className="icon-calendar-o"></span> 12 июня 2017
                                                                </div>
                                                            </div>
                                                            <div className="card-block">
                                                                <h3 className="card-title">Топ-5 ошибок при заполнении
                                                                    профиля на бирже фриланса</h3>
                                                            </div>
                                                            <div className="card-block">
                                                                <div className="tags">
                                                                    <span className="tag"># База знаний</span>
                                                                </div>
                                                            </div>
                                                            <div className="card-block">
                                                                <div className="card-image">
                                                                    <img src="images/img-post-1.jpg" alt=""/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="grid-item">
                                                    <a href="#"
                                                       className="card card-post card-post-secondary card-post-modify">
                                                        <div className="card-body">
                                                            <div className="card-block">
                                                                <div className="card-date"><span
                                                                    className="icon-calendar-o"></span> 12 июня 2017
                                                                </div>
                                                            </div>
                                                            <div className="card-block">
                                                                <h3 className="card-title">Топ-5 ошибок при заполнении
                                                                    профиля на бирже фриланса</h3>
                                                            </div>
                                                            <div className="card-block">
                                                                <div className="tags">
                                                                    <span className="tag"># База знаний</span>
                                                                </div>
                                                            </div>
                                                            <div className="card-block">
                                                                <div className="card-image">
                                                                    <img src="images/img-post-1.jpg" alt=""/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="grid-item">
                                                    <a href="#"
                                                       className="card card-post card-post-secondary card-post-modify">
                                                        <div className="card-body">
                                                            <div className="card-block">
                                                                <div className="card-date"><span
                                                                    className="icon-calendar-o"></span> 12 июня 2017
                                                                </div>
                                                            </div>
                                                            <div className="card-block">
                                                                <h3 className="card-title">Топ-5 ошибок при заполнении
                                                                    профиля на бирже фриланса</h3>
                                                            </div>
                                                            <div className="card-block">
                                                                <div className="tags">
                                                                    <span className="tag"># База знаний</span>
                                                                </div>
                                                            </div>
                                                            <div className="card-block">
                                                                <div className="card-image">
                                                                    <img src="images/img-post-1.jpg" alt=""/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="grid-item">
                                                    <a href="#"
                                                       className="card card-post card-post-secondary card-post-modify">
                                                        <div className="card-body">
                                                            <div className="card-block">
                                                                <div className="card-date"><span
                                                                    className="icon-calendar-o"></span> 12 июня 2017
                                                                </div>
                                                            </div>
                                                            <div className="card-block">
                                                                <h3 className="card-title">Топ-5 ошибок при заполнении
                                                                    профиля на бирже фриланса</h3>
                                                            </div>
                                                            <div className="card-block">
                                                                <div className="tags">
                                                                    <span className="tag"># База знаний</span>
                                                                </div>
                                                            </div>
                                                            <div className="card-block">
                                                                <div className="card-image">
                                                                    <img src="images/img-post-1.jpg" alt=""/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section section-contacts" id="section-contacts">
                        <div className="section-foreground">
                            <div className="section-body">
                                <div className="container">
                                    <div className="layout layout-contacts layout-contacts-small">
                                        <div className="layout-item">
                                            <div className="heading">
                                                <h2 className="heading-title">Контактная информация</h2>
                                                <div className="heading-description">Если у вас все еще остались вопросы
                                                    свяжитесь
                                                    с нами любым удобным для вас способом,
                                                    указанным ниже.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="layout-item">
                                            <div className="grid grid-contacts">
                                                <div className="grid-item">
                                                    <div className="card card-contact">
                                                        <ul className="card-list">
                                                            <li>
                                                                <div className="contact">
                                                                    <div className="contact-title">Звоните нам:</div>
                                                                    <div className="contact-phone">+380 (67) 01-01-202
                                                                    </div>
                                                                    <a href="#" className="contact-phone-link"
                                                                       data-uk-toggle="target: #modal-call-me">Заказать
                                                                        обратный
                                                                        звонок</a>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="contact">
                                                                    <div className="contact-title">Пишите нам:</div>
                                                                    <ul className="contact-list">
                                                                        <li>
                                                                            <a href="#" className="contact-link">info@spalah.ua</a>
                                                                            <div className="contact-label">для общих
                                                                                вопросов
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" className="contact-link">school@spalah.ua</a>
                                                                            <div className="contact-label">для вопросов
                                                                                по школе
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" className="contact-link">event@spalah.ua</a>
                                                                            <div className="contact-label">для вопросов
                                                                                по
                                                                                мероприятиям
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="contact">
                                                                    <div className="contact-title">Подпишитесь на соц.
                                                                        сети:
                                                                    </div>
                                                                    <ul className="socials-list contact-socials">
                                                                        <li>
                                                                            <a href="#" className="social">
                                                                                <span className="icon-facebook"></span>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" className="social">
                                                                                <span
                                                                                    className="icon-youtube-play"></span>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" className="social">
                                                                                <span className="icon-instagram"></span>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" className="social">
                                                                                <span className="icon-linkedin"></span>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" className="social">
                                                                                <span className="icon-behance"></span>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <form action="#" className="form form-newsletter-news">
                                                                    <div className="form-title">Подпишитесь на
                                                                        новости:
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <button className="form-icon"><span
                                                                            className="icon-arrow-right"></span>
                                                                        </button>
                                                                        <input type="email"
                                                                               pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                                                                               required/>
                                                                        <label className="placeholder">Введите вашу эл.
                                                                            почту</label>
                                                                    </div>
                                                                </form>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="grid-item">
                                                    <div className="card card-location">
                                                        <div className="card-body">
                                                            <ul className="card-list">
                                                                <li>
                                                                    <div className="card-title">Посетите нас по
                                                                        адресу:
                                                                    </div>
                                                                    <div className="card-text">ул. Девичья 6, г. Харьков
                                                                        Третий и
                                                                        четвертый этаж
                                                                    </div>
                                                                    <ul className="list list-hyphen color-primary">
                                                                        <li>IT-школа</li>
                                                                        <li>Мероприятия</li>
                                                                        <li>Коворкинг</li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <div className="card-title">Время работы:</div>
                                                                    <div className="card-text">Пн - Сб: 09:00 - 22:00
                                                                    </div>
                                                                    <div className="card-text">Вс: 11:00 - 20:00</div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="card-footer">
                                                            <div className="card-map"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

            </div>
        );
    }
}

export default School
