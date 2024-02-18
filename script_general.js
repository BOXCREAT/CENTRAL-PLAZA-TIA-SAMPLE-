(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"backgroundColorRatios":[0],"class":"Player","gap":10,"definitions": [{"viewerArea":"this.MainViewer","mouseControlMode":"drag_rotation","displayPlaybackBar":true,"surfaceSelectionEnabled":false,"touchControlMode":"drag_rotation","arrowKeysAction":"translate","zoomEnabled":true,"gyroscopeVerticalDraggingEnabled":true,"aaEnabled":true,"class":"PanoramaPlayer","id":"MainViewerPanoramaPlayer"},{"frames":[{"cube":{"levels":[{"width":9216,"rowCount":3,"colCount":18,"class":"TiledImageResourceLevel","height":1536,"tags":"ondemand","url":"media/panorama_B27467EA_BB85_5C4F_41E0_8205A4299A83_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"rowCount":2,"colCount":12,"class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","url":"media/panorama_B27467EA_BB85_5C4F_41E0_8205A4299A83_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"rowCount":1,"colCount":6,"class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"url":"media/panorama_B27467EA_BB85_5C4F_41E0_8205A4299A83_0/{face}/2/{row}_{column}.jpg"}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_B27467EA_BB85_5C4F_41E0_8205A4299A83_t.jpg"}],"thumbnailUrl":"media/panorama_B27467EA_BB85_5C4F_41E0_8205A4299A83_t.jpg","adjacentPanoramas":[{"panorama":"this.panorama_B274921A_BB85_57CF_41E2_3C8D9D3602A0","yaw":-158.01,"select":"this.overlay_B5A1DD9F_BB8D_CCC5_41E3_9682699FC555.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","distance":6.01,"backwardYaw":18.29,"data":{"overlayID":"overlay_B5A1DD9F_BB8D_CCC5_41E3_9682699FC555"}},{"panorama":"this.panorama_B16DFD7F_BB84_CC44_41E2_094E418FDDB7","yaw":91.77,"select":"this.overlay_B575CC71_BB8B_4C5C_41E3_B327D88E38F0.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","distance":2.63,"backwardYaw":-79.62,"data":{"overlayID":"overlay_B575CC71_BB8B_4C5C_41E3_B327D88E38F0"}}],"overlays":["this.overlay_B5A1DD9F_BB8D_CCC5_41E3_9682699FC555","this.overlay_B575CC71_BB8B_4C5C_41E3_B327D88E38F0"],"class":"Panorama","partial":false,"pitch":0,"id":"panorama_B27467EA_BB85_5C4F_41E0_8205A4299A83","label":trans('panorama_B27467EA_BB85_5C4F_41E0_8205A4299A83.label'),"hfovMax":110,"hfov":360,"data":{"label":"living dining entry"},"vfov":180},{"class":"IconButton","data":{"name":"-next"},"width":92,"visible":false,"backgroundOpacity":0,"cursor":"hand","paddingTop":0,"paddingLeft":0,"horizontalAlign":"center","propagateClick":false,"transparencyActive":true,"paddingBottom":0,"id":"IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9","verticalAlign":"middle","bottom":"35%","top":"35%","toolTipHorizontalAlign":"center","iconURL":"skin/IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9.png","click":"this.loadFromCurrentMediaPlayList(this.mainPlayList, 1, true)","maxHeight":46,"maxWidth":46,"paddingRight":0,"borderRadius":0,"mode":"push","borderSize":0,"minWidth":1,"shadow":false,"minHeight":1,"right":"1%"},{"shadow":false,"playbackBarHeadShadowOpacity":0.7,"class":"ViewerArea","subtitlesVerticalAlign":"bottom","toolTipFontFamily":"Arial","playbackBarHeadBorderSize":0,"displayTooltipInSurfaceSelection":true,"data":{"name":"Main Viewer"},"toolTipBorderRadius":3,"width":"100%","toolTipShadowOpacity":1,"playbackBarProgressBackgroundColorRatios":[0],"paddingLeft":0,"playbackBarProgressBackgroundColorDirection":"vertical","id":"MainViewer","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarBorderColor":"#FFFFFF","playbackBarHeadBorderColor":"#000000","toolTipBackgroundColor":"#F6F6F6","progressBackgroundColorRatios":[0],"playbackBarBorderSize":0,"toolTipFontSize":"1.11vmin","subtitlesFontWeight":"normal","paddingRight":0,"toolTipTextShadowColor":"#000000","progressRight":0,"subtitlesFontFamily":"Arial","toolTipBorderColor":"#767676","playbackBarOpacity":1,"transitionMode":"blending","progressBarBackgroundColorDirection":"vertical","progressOpacity":1,"translationTransitionDuration":1000,"progressBarBorderColor":"#000000","toolTipHorizontalAlign":"center","playbackBarBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0],"subtitlesTop":0,"progressBackgroundColorDirection":"vertical","playbackBarHeadShadow":true,"subtitlesGap":0,"playbackBarRight":0,"subtitlesTextShadowColor":"#000000","playbackBarHeadBackgroundColorDirection":"vertical","subtitlesFontSize":"3vmin","toolTipShadowVerticalLength":0,"toolTipPaddingLeft":6,"playbackBarHeadBackgroundColor":["#111111","#666666"],"displayTooltipInTouchScreens":true,"subtitlesFontColor":"#FFFFFF","progressBarBackgroundColor":["#3399FF"],"playbackBarHeight":10,"progressBackgroundOpacity":1,"progressBorderColor":"#000000","doubleClickAction":"toggle_fullscreen","subtitlesBackgroundOpacity":0.2,"subtitlesPaddingLeft":5,"progressBackgroundColor":["#FFFFFF"],"playbackBarBorderRadius":0,"progressBarOpacity":1,"vrPointerColor":"#FFFFFF","playbackBarProgressBorderColor":"#000000","progressBottom":0,"subtitlesHorizontalAlign":"center","borderSize":0,"playbackBarBackgroundOpacity":1,"subtitlesBorderColor":"#FFFFFF","minWidth":100,"toolTipPaddingRight":6,"minHeight":50,"subtitlesPaddingBottom":5,"toolTipTextShadowOpacity":0,"subtitlesTextDecoration":"none","progressHeight":10,"toolTipFontStyle":"normal","subtitlesTextShadowHorizontalLength":1,"height":"100%","progressBarBorderRadius":0,"toolTipShadowSpread":0,"paddingTop":0,"playbackBarHeadOpacity":1,"transitionDuration":500,"toolTipFontColor":"#606060","toolTipTextShadowBlurRadius":3,"subtitlesTextShadowBlurRadius":0,"paddingBottom":0,"propagateClick":false,"firstTransitionDuration":0,"toolTipPaddingBottom":4,"progressBorderRadius":0,"subtitlesOpacity":1,"progressBarBorderSize":0,"progressBorderSize":0,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarLeft":0,"playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipFontWeight":"normal","surfaceReticleColor":"#FFFFFF","playbackBarHeadShadowVerticalLength":0,"subtitlesBorderSize":0,"playbackBarProgressBorderRadius":0,"playbackBarHeadShadowColor":"#000000","progressLeft":0,"toolTipShadowColor":"#333333","playbackBarHeadShadowHorizontalLength":0,"vrPointerSelectionTime":2000,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesBottom":50,"subtitlesPaddingRight":5,"playbackBarHeadBorderRadius":0,"subtitlesShadow":false,"toolTipPaddingTop":4,"toolTipBorderSize":1,"toolTipDisplayTime":600,"surfaceReticleSelectionOpacity":1,"subtitlesTextShadowOpacity":1,"surfaceReticleOpacity":0.6,"toolTipOpacity":1,"playbackBarHeadShadowBlurRadius":3,"subtitlesBackgroundColor":"#000000","borderRadius":0,"subtitlesTextShadowVerticalLength":1,"playbackBarProgressOpacity":1,"toolTipShadowHorizontalLength":0,"toolTipShadowBlurRadius":3,"vrPointerSelectionColor":"#FF6600","subtitlesPaddingTop":5,"playbackBarBottom":5,"subtitlesEnabled":true,"playbackBarHeadWidth":6,"playbackBarProgressBorderSize":0},{"items":[{"begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","media":"this.panorama_B274921A_BB85_57CF_41E2_3C8D9D3602A0","class":"PanoramaPlayListItem","camera":"this.panorama_B274921A_BB85_57CF_41E2_3C8D9D3602A0_camera","player":"this.MainViewerPanoramaPlayer"},{"begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","media":"this.panorama_B16DFD7F_BB84_CC44_41E2_094E418FDDB7","class":"PanoramaPlayListItem","camera":"this.panorama_B16DFD7F_BB84_CC44_41E2_094E418FDDB7_camera","player":"this.MainViewerPanoramaPlayer"},{"begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)","media":"this.panorama_B27FE4D6_BB85_3C47_41AC_35BAAB7D72F6","class":"PanoramaPlayListItem","camera":"this.panorama_B27FE4D6_BB85_3C47_41AC_35BAAB7D72F6_camera","player":"this.MainViewerPanoramaPlayer"},{"begin":"this.setEndToItemIndex(this.mainPlayList, 3, 4)","media":"this.panorama_B274AB60_BB85_347B_41DB_24F92E8EE9D1","class":"PanoramaPlayListItem","camera":"this.panorama_B274AB60_BB85_347B_41DB_24F92E8EE9D1_camera","player":"this.MainViewerPanoramaPlayer"},{"camera":"this.panorama_B27467EA_BB85_5C4F_41E0_8205A4299A83_camera","media":"this.panorama_B27467EA_BB85_5C4F_41E0_8205A4299A83","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 4, 0)","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')"}],"class":"PlayList","id":"mainPlayList"},{"thumbnailUrl":"media/panorama_B274AB60_BB85_347B_41DB_24F92E8EE9D1_t.jpg","id":"panorama_B274AB60_BB85_347B_41DB_24F92E8EE9D1","hfovMax":130,"class":"Panorama","hfov":360,"hfovMin":"150%","label":trans('panorama_B274AB60_BB85_347B_41DB_24F92E8EE9D1.label'),"frames":[{"cube":{"levels":[{"width":9216,"rowCount":3,"colCount":18,"class":"TiledImageResourceLevel","height":1536,"tags":"ondemand","url":"media/panorama_B274AB60_BB85_347B_41DB_24F92E8EE9D1_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"rowCount":2,"colCount":12,"class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","url":"media/panorama_B274AB60_BB85_347B_41DB_24F92E8EE9D1_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"rowCount":1,"colCount":6,"class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"url":"media/panorama_B274AB60_BB85_347B_41DB_24F92E8EE9D1_0/{face}/2/{row}_{column}.jpg"}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_B274AB60_BB85_347B_41DB_24F92E8EE9D1_t.jpg"}],"partial":false,"pitch":0,"data":{"label":"living area "},"vfov":180},{"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"automaticZoomSpeed":10,"class":"PanoramaCamera","initialSequence":"this.sequence_B1885D7D_BB85_4C45_41D0_17AEB6C22997","hoverFactor":0,"id":"panorama_B274921A_BB85_57CF_41E2_3C8D9D3602A0_camera"},{"data":{"label":"y2mate.com - Jazz Music 1 No Copyright"},"loop":false,"audio":{"class":"AudioResource","mp3Url":"media/audio_AFC62E40_BB87_4FBB_41B6_A21469E297F1.mp3","oggUrl":"media/audio_AFC62E40_BB87_4FBB_41B6_A21469E297F1.ogg"},"autoplay":true,"class":"MediaAudio","id":"audio_AFC62E40_BB87_4FBB_41B6_A21469E297F1"},{"frames":[{"cube":{"levels":[{"width":9216,"rowCount":3,"colCount":18,"class":"TiledImageResourceLevel","height":1536,"tags":"ondemand","url":"media/panorama_B274921A_BB85_57CF_41E2_3C8D9D3602A0_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"rowCount":2,"colCount":12,"class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","url":"media/panorama_B274921A_BB85_57CF_41E2_3C8D9D3602A0_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"rowCount":1,"colCount":6,"class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"url":"media/panorama_B274921A_BB85_57CF_41E2_3C8D9D3602A0_0/{face}/2/{row}_{column}.jpg"}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_B274921A_BB85_57CF_41E2_3C8D9D3602A0_t.jpg"}],"thumbnailUrl":"media/panorama_B274921A_BB85_57CF_41E2_3C8D9D3602A0_t.jpg","vfov":180,"hfovMin":"150%","overlays":["this.overlay_B6245774_BB8B_3C5B_41DD_E3ED96612B02"],"class":"Panorama","partial":false,"pitch":0,"id":"panorama_B274921A_BB85_57CF_41E2_3C8D9D3602A0","label":trans('panorama_B274921A_BB85_57CF_41E2_3C8D9D3602A0.label'),"hfovMax":130,"hfov":360,"data":{"label":"entrance lobby"},"adjacentPanoramas":[{"panorama":"this.panorama_B27467EA_BB85_5C4F_41E0_8205A4299A83","yaw":18.29,"select":"this.overlay_B6245774_BB8B_3C5B_41DD_E3ED96612B02.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","distance":5.58,"backwardYaw":-158.01,"data":{"overlayID":"overlay_B6245774_BB8B_3C5B_41DD_E3ED96612B02"}}]},{"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"automaticZoomSpeed":10,"class":"PanoramaCamera","initialSequence":"this.sequence_B189ED73_BB85_4C5D_4181_11840D5A5430","hoverFactor":0,"id":"panorama_B27FE4D6_BB85_3C47_41AC_35BAAB7D72F6_camera"},{"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"automaticZoomSpeed":10,"class":"PanoramaCamera","initialSequence":"this.sequence_B1887D7D_BB85_4C45_41E4_FD6C77A21279","hoverFactor":0,"id":"panorama_B27467EA_BB85_5C4F_41E0_8205A4299A83_camera"},{"frames":[{"cube":{"levels":[{"width":9216,"rowCount":3,"colCount":18,"class":"TiledImageResourceLevel","height":1536,"tags":"ondemand","url":"media/panorama_B16DFD7F_BB84_CC44_41E2_094E418FDDB7_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"rowCount":2,"colCount":12,"class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","url":"media/panorama_B16DFD7F_BB84_CC44_41E2_094E418FDDB7_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"rowCount":1,"colCount":6,"class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"url":"media/panorama_B16DFD7F_BB84_CC44_41E2_094E418FDDB7_0/{face}/2/{row}_{column}.jpg"}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_B16DFD7F_BB84_CC44_41E2_094E418FDDB7_t.jpg"}],"thumbnailUrl":"media/panorama_B16DFD7F_BB84_CC44_41E2_094E418FDDB7_t.jpg","vfov":180,"overlays":["this.overlay_B4297EE3_BB8B_CC7D_41DF_85E00A88414B","this.overlay_B44EE04C_BB8B_744B_41D3_D98827E44A6F"],"class":"Panorama","partial":false,"pitch":0,"id":"panorama_B16DFD7F_BB84_CC44_41E2_094E418FDDB7","label":trans('panorama_B16DFD7F_BB84_CC44_41E2_094E418FDDB7.label'),"hfovMax":105,"hfov":360,"data":{"label":"living area "},"adjacentPanoramas":[{"panorama":"this.panorama_B27467EA_BB85_5C4F_41E0_8205A4299A83","yaw":-79.62,"select":"this.overlay_B4297EE3_BB8B_CC7D_41DF_85E00A88414B.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","distance":3.34,"backwardYaw":91.77,"data":{"overlayID":"overlay_B4297EE3_BB8B_CC7D_41DF_85E00A88414B"}},{"panorama":"this.panorama_B27FE4D6_BB85_3C47_41AC_35BAAB7D72F6","yaw":-1.07,"select":"this.overlay_B44EE04C_BB8B_744B_41D3_D98827E44A6F.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","distance":3.48,"backwardYaw":-175.22,"data":{"overlayID":"overlay_B44EE04C_BB8B_744B_41D3_D98827E44A6F"}}]},{"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"automaticZoomSpeed":10,"class":"PanoramaCamera","initialSequence":"this.sequence_B1883D73_BB85_4C5D_41E6_4B36FC39D3D8","hoverFactor":0,"id":"panorama_B274AB60_BB85_347B_41DB_24F92E8EE9D1_camera"},{"frames":[{"cube":{"levels":[{"width":9216,"rowCount":3,"colCount":18,"class":"TiledImageResourceLevel","height":1536,"tags":"ondemand","url":"media/panorama_B27FE4D6_BB85_3C47_41AC_35BAAB7D72F6_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"rowCount":2,"colCount":12,"class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","url":"media/panorama_B27FE4D6_BB85_3C47_41AC_35BAAB7D72F6_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"rowCount":1,"colCount":6,"class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"url":"media/panorama_B27FE4D6_BB85_3C47_41AC_35BAAB7D72F6_0/{face}/2/{row}_{column}.jpg"}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_B27FE4D6_BB85_3C47_41AC_35BAAB7D72F6_t.jpg"}],"thumbnailUrl":"media/panorama_B27FE4D6_BB85_3C47_41AC_35BAAB7D72F6_t.jpg","vfov":180,"hfovMin":"150%","overlays":["this.overlay_B4273335_BB85_35C8_41E4_407B352EA940","this.overlay_AB9FAB34_BB85_55C4_41B1_73A2C7560A64"],"class":"Panorama","partial":false,"pitch":0,"id":"panorama_B27FE4D6_BB85_3C47_41AC_35BAAB7D72F6","label":trans('panorama_B27FE4D6_BB85_3C47_41AC_35BAAB7D72F6.label'),"hfovMax":130,"hfov":360,"data":{"label":"dining area "},"adjacentPanoramas":[{"panorama":"this.panorama_B16DFD7F_BB84_CC44_41E2_094E418FDDB7","yaw":-175.22,"select":"this.overlay_B4273335_BB85_35C8_41E4_407B352EA940.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","distance":4.06,"backwardYaw":-1.07,"data":{"overlayID":"overlay_B4273335_BB85_35C8_41E4_407B352EA940"}},{"panorama":"this.panorama_B27467EA_BB85_5C4F_41E0_8205A4299A83","yaw":-130.24,"select":"this.overlay_AB9FAB34_BB85_55C4_41B1_73A2C7560A64.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","data":{"overlayID":"overlay_AB9FAB34_BB85_55C4_41B1_73A2C7560A64"},"distance":4.3}]},{"initialPosition":{"hfov":100,"yaw":-32.41,"pitch":-0.99,"class":"PanoramaCameraPosition"},"automaticZoomSpeed":36,"class":"PanoramaCamera","initialSequence":"this.sequence_B18C8D73_BB85_4C5D_41CB_B231EA9BA4FA","hoverFactor":0,"manualZoomSpeed":3,"id":"panorama_B16DFD7F_BB84_CC44_41E2_094E418FDDB7_camera"},{"areas":["this.HotspotPanoramaOverlayArea_B5BE5DA8_BB8D_CCCB_41B4_0AD513EB7F10"],"maps":[],"class":"HotspotPanoramaOverlay","useHandCursor":true,"enabledInCardboard":true,"items":[{"distance":100,"yaw":-158.01,"class":"HotspotPanoramaOverlayImage","vfov":2.49,"horizontalAlign":"center","hfov":10.19,"data":{"label":"Circle 03c"},"verticalAlign":"middle","image":"this.AnimatedImageResource_AF063BB2_BB8C_D4DF_41B5_CED536A10E4C","pitch":-15.79,"scaleMode":"fit_inside"}],"data":{"hasPanoramaAction":true,"label":"Circle 03c"},"id":"overlay_B5A1DD9F_BB8D_CCC5_41E3_9682699FC555"},{"areas":["this.HotspotPanoramaOverlayArea_B4843C71_BB8B_4C5C_41D3_7471E133F100"],"maps":[],"class":"HotspotPanoramaOverlay","useHandCursor":true,"enabledInCardboard":true,"items":[{"distance":100,"yaw":91.77,"class":"HotspotPanoramaOverlayImage","vfov":3.39,"horizontalAlign":"center","hfov":7.78,"data":{"label":"Circle 03b"},"verticalAlign":"middle","image":"this.AnimatedImageResource_AF07FBB2_BB8C_D4DF_41C5_65516270423C","pitch":-32.82,"scaleMode":"fit_inside"}],"data":{"hasPanoramaAction":true,"label":"Circle 03b"},"id":"overlay_B575CC71_BB8B_4C5C_41E3_B327D88E38F0"},{"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"}],"restartMovementOnUserInteraction":false,"id":"sequence_B1885D7D_BB85_4C45_41D0_17AEB6C22997"},{"areas":["this.HotspotPanoramaOverlayArea_B58ED7BE_BB8B_3CC7_41C6_96E3769FC321"],"maps":[],"class":"HotspotPanoramaOverlay","useHandCursor":true,"enabledInCardboard":true,"items":[{"distance":100,"yaw":18.29,"class":"HotspotPanoramaOverlayImage","vfov":2.69,"horizontalAlign":"center","hfov":5.73,"data":{"label":"Circle 03c"},"verticalAlign":"middle","image":"this.AnimatedImageResource_AF053BB2_BB8C_D4DF_41C2_D6B21BEA17A0","pitch":-16.94,"scaleMode":"fit_inside"}],"data":{"hasPanoramaAction":true,"label":"Circle 03c"},"id":"overlay_B6245774_BB8B_3C5B_41DD_E3ED96612B02"},{"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"}],"restartMovementOnUserInteraction":false,"id":"sequence_B189ED73_BB85_4C5D_4181_11840D5A5430"},{"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"}],"restartMovementOnUserInteraction":false,"id":"sequence_B1887D7D_BB85_4C45_41E4_FD6C77A21279"},{"areas":["this.HotspotPanoramaOverlayArea_B4242EE3_BB8B_CC7D_41C9_F71450D3265B"],"maps":[],"class":"HotspotPanoramaOverlay","useHandCursor":true,"enabledInCardboard":true,"items":[{"distance":100,"yaw":-79.62,"class":"HotspotPanoramaOverlayImage","vfov":2.92,"horizontalAlign":"center","hfov":9.75,"data":{"label":"Circle 03b"},"verticalAlign":"middle","image":"this.AnimatedImageResource_AF050BB2_BB8C_D4DF_41D6_4D249787E9DD","pitch":-26.93,"scaleMode":"fit_inside"}],"data":{"hasPanoramaAction":true,"label":"Circle 03b"},"id":"overlay_B4297EE3_BB8B_CC7D_41DF_85E00A88414B"},{"areas":["this.HotspotPanoramaOverlayArea_B44F4054_BB8B_745B_41CE_AC853B7A9F47"],"maps":[],"class":"HotspotPanoramaOverlay","useHandCursor":true,"enabledInCardboard":true,"items":[{"distance":100,"yaw":-1.07,"class":"HotspotPanoramaOverlayImage","vfov":3.02,"horizontalAlign":"center","hfov":8.14,"data":{"label":"Circle 03b"},"verticalAlign":"middle","image":"this.AnimatedImageResource_AF06DBB2_BB8C_D4DF_41CE_90BA55A711CE","pitch":-26.03,"scaleMode":"fit_inside"}],"data":{"hasPanoramaAction":true,"label":"Circle 03b"},"id":"overlay_B44EE04C_BB8B_744B_41D3_D98827E44A6F"},{"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"}],"restartMovementOnUserInteraction":false,"id":"sequence_B1883D73_BB85_4C5D_41E6_4B36FC39D3D8"},{"areas":["this.HotspotPanoramaOverlayArea_B43DE341_BB85_35BC_41D1_725ED583789F"],"maps":[],"class":"HotspotPanoramaOverlay","useHandCursor":true,"enabledInCardboard":true,"items":[{"distance":100,"yaw":-175.22,"class":"HotspotPanoramaOverlayImage","vfov":2.43,"horizontalAlign":"center","hfov":7.98,"data":{"label":"Circle 03b"},"verticalAlign":"middle","image":"this.AnimatedImageResource_AF06ABB2_BB8C_D4DF_41BA_CE6064E87FCF","pitch":-22.69,"scaleMode":"fit_inside"}],"data":{"hasPanoramaAction":true,"label":"Circle 03b"},"id":"overlay_B4273335_BB85_35C8_41E4_407B352EA940"},{"areas":["this.HotspotPanoramaOverlayArea_AB9B0B44_BB85_5444_41E1_FBA00D06651D"],"maps":[],"class":"HotspotPanoramaOverlay","useHandCursor":true,"enabledInCardboard":true,"items":[{"distance":100,"yaw":-130.24,"class":"HotspotPanoramaOverlayImage","vfov":2.49,"horizontalAlign":"center","hfov":7.65,"data":{"label":"Circle 03b"},"verticalAlign":"middle","image":"this.AnimatedImageResource_AF068BB2_BB8C_D4DF_41D1_97878D045AFD","pitch":-21.57,"scaleMode":"fit_inside"}],"data":{"hasPanoramaAction":true,"label":"Circle 03b"},"id":"overlay_AB9FAB34_BB85_55C4_41B1_73A2C7560A64"},{"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"}],"restartMovementOnUserInteraction":false,"id":"sequence_B18C8D73_BB85_4C5D_41CB_B231EA9BA4FA"},{"click":"this.mainPlayList.set('selectedIndex', 0)","mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_B5BE5DA8_BB8D_CCCB_41B4_0AD513EB7F10"},{"colCount":4,"rowCount":6,"frameDuration":41,"class":"AnimatedImageResource","id":"AnimatedImageResource_AF063BB2_BB8C_D4DF_41B5_CED536A10E4C","levels":[{"height":234,"width":604,"url":"media/res_AABE2747_BB9C_FC45_41DB_74E66B9E92AA_0.png","class":"ImageResourceLevel"}],"frameCount":24},{"click":"this.mainPlayList.set('selectedIndex', 1)","mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_B4843C71_BB8B_4C5C_41D3_7471E133F100"},{"colCount":4,"rowCount":6,"frameDuration":41,"class":"AnimatedImageResource","id":"AnimatedImageResource_AF07FBB2_BB8C_D4DF_41C5_65516270423C","levels":[{"height":300,"width":488,"url":"media/res_AAB96741_BB9C_FDBC_41B9_818C898DAEFE_0.png","class":"ImageResourceLevel"}],"frameCount":24},{"click":"this.mainPlayList.set('selectedIndex', 4)","mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_B58ED7BE_BB8B_3CC7_41C6_96E3769FC321"},{"colCount":4,"rowCount":6,"frameDuration":41,"class":"AnimatedImageResource","id":"AnimatedImageResource_AF053BB2_BB8C_D4DF_41C2_D6B21BEA17A0","levels":[{"height":234,"width":604,"url":"media/res_AABE2747_BB9C_FC45_41DB_74E66B9E92AA_0.png","class":"ImageResourceLevel"}],"frameCount":24},{"click":"this.mainPlayList.set('selectedIndex', 4)","mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_B4242EE3_BB8B_CC7D_41C9_F71450D3265B"},{"colCount":4,"rowCount":6,"frameDuration":41,"class":"AnimatedImageResource","id":"AnimatedImageResource_AF050BB2_BB8C_D4DF_41D6_4D249787E9DD","levels":[{"height":300,"width":488,"url":"media/res_AAB96741_BB9C_FDBC_41B9_818C898DAEFE_0.png","class":"ImageResourceLevel"}],"frameCount":24},{"click":"this.mainPlayList.set('selectedIndex', 2)","mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_B44F4054_BB8B_745B_41CE_AC853B7A9F47"},{"colCount":4,"rowCount":6,"frameDuration":41,"class":"AnimatedImageResource","id":"AnimatedImageResource_AF06DBB2_BB8C_D4DF_41CE_90BA55A711CE","levels":[{"height":300,"width":488,"url":"media/res_AAB96741_BB9C_FDBC_41B9_818C898DAEFE_0.png","class":"ImageResourceLevel"}],"frameCount":24},{"click":"this.mainPlayList.set('selectedIndex', 1)","mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_B43DE341_BB85_35BC_41D1_725ED583789F"},{"colCount":4,"rowCount":6,"frameDuration":41,"class":"AnimatedImageResource","id":"AnimatedImageResource_AF06ABB2_BB8C_D4DF_41BA_CE6064E87FCF","levels":[{"height":300,"width":488,"url":"media/res_AAB96741_BB9C_FDBC_41B9_818C898DAEFE_0.png","class":"ImageResourceLevel"}],"frameCount":24},{"click":"this.mainPlayList.set('selectedIndex', 4)","mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_AB9B0B44_BB85_5444_41E1_FBA00D06651D"},{"colCount":4,"rowCount":6,"frameDuration":41,"class":"AnimatedImageResource","id":"AnimatedImageResource_AF068BB2_BB8C_D4DF_41D1_97878D045AFD","levels":[{"height":300,"width":488,"url":"media/res_AAB96741_BB9C_FDBC_41B9_818C898DAEFE_0.png","class":"ImageResourceLevel"}],"frameCount":24}],"backgroundColorDirection":"vertical","mediaActivationMode":"window","backgroundOpacity":1,"paddingTop":0,"paddingLeft":0,"mouseWheelEnabled":true,"scrollBarMargin":2,"paddingBottom":0,"propagateClick":false,"horizontalAlign":"left","width":"100%","id":"rootPlayer","overflow":"hidden","scripts":{"updateVideoCues":TDV.Tour.Script.updateVideoCues,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"resumePlayers":TDV.Tour.Script.resumePlayers,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"isPanorama":TDV.Tour.Script.isPanorama,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getMediaByName":TDV.Tour.Script.getMediaByName,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getKey":TDV.Tour.Script.getKey,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"quizFinish":TDV.Tour.Script.quizFinish,"downloadFile":TDV.Tour.Script.downloadFile,"registerKey":TDV.Tour.Script.registerKey,"unregisterKey":TDV.Tour.Script.unregisterKey,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"clone":TDV.Tour.Script.clone,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"openLink":TDV.Tour.Script.openLink,"showPopupImage":TDV.Tour.Script.showPopupImage,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"historyGoBack":TDV.Tour.Script.historyGoBack,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"historyGoForward":TDV.Tour.Script.historyGoForward,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"init":TDV.Tour.Script.init,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"existsKey":TDV.Tour.Script.existsKey,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"shareSocial":TDV.Tour.Script.shareSocial,"getMainViewer":TDV.Tour.Script.getMainViewer,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"initAnalytics":TDV.Tour.Script.initAnalytics,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"playAudioList":TDV.Tour.Script.playAudioList,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"initQuiz":TDV.Tour.Script.initQuiz,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getOverlays":TDV.Tour.Script.getOverlays,"cloneCamera":TDV.Tour.Script.cloneCamera,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"textToSpeech":TDV.Tour.Script.textToSpeech,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getComponentByName":TDV.Tour.Script.getComponentByName,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setValue":TDV.Tour.Script.setValue,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getPixels":TDV.Tour.Script.getPixels,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"showWindow":TDV.Tour.Script.showWindow,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setLocale":TDV.Tour.Script.setLocale,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"quizStart":TDV.Tour.Script.quizStart,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"mixObject":TDV.Tour.Script.mixObject,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"quizShowScore":TDV.Tour.Script.quizShowScore,"setMapLocation":TDV.Tour.Script.setMapLocation,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"translate":TDV.Tour.Script.translate,"getMediaHeight":TDV.Tour.Script.getMediaHeight},"mobileMipmappingEnabled":false,"verticalAlign":"top","defaultVRPointer":"laser","children":["this.MainViewer","this.IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9"],"scrollBarOpacity":0.5,"contentOpaque":false,"paddingRight":0,"toolTipHorizontalAlign":"center","layout":"absolute","height":"100%","scrollBarWidth":10,"backgroundColor":["#FFFFFF"],"scrollBarColor":"#000000","backgroundPreloadEnabled":true,"scrollBarVisible":"rollOver","borderRadius":0,"vrPolyfillScale":0.5,"downloadEnabled":false,"borderSize":0,"start":"this.init(); this.playAudioList([this.audio_AFC62E40_BB87_4FBB_41B6_A21469E297F1], true)","desktopMipmappingEnabled":false,"minWidth":20,"shadow":false,"minHeight":20,"data":{"name":"Player486","defaultLocale":"en","locales":{"en":"locale/en.txt"},"initialScale":0.5,"textToSpeechConfig":{"stopBackgroundAudio":false,"volume":1,"speechOnInfoWindow":false,"speechOnTooltip":false,"speechOnQuizQuestion":false,"pitch":1,"rate":1}}};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.3.js.map
//Generated with v2021.2.3, Sun Feb 18 2024