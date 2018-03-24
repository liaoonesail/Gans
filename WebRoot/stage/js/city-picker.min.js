// jshint ignore: start
+function (e) {
    e.rawCitiesData = [{
        name: "甘肃省",
        code: "620000",
        sub: [{
            name: "兰州市",
            code: "620100",
            sub: [{name: "市辖区", code: "620101"}, {name: "城关区", code: "620102"}, {
                name: "七里河区",
                code: "620103"
            }, {name: "西固区", code: "620104"}, {name: "安宁区", code: "620105"}, {
                name: "红古区",
                code: "620111"
            }, {name: "永登县", code: "620121"}, {name: "皋兰县", code: "620122"}, {name: "榆中县", code: "620123"}]
        }, {
            name: "嘉峪关市",
            code: "620200",
            sub: [{name: "市辖区", code: "620201"}, {name: "雄关区", code: "620202"}, {
                name: "长城区",
                code: "620203"
            }, {name: "境铁区", code: "620203"}]
        }, {
            name: "金昌市",
            code: "620300",
            sub: [{name: "市辖区", code: "620301"}, {name: "金川区", code: "620302"}, {name: "永昌县", code: "620321"}]
        }, {
            name: "白银市",
            code: "620400",
            sub: [{name: "市辖区", code: "620401"}, {name: "白银区", code: "620402"}, {
                name: "平川区",
                code: "620403"
            }, {name: "靖远县", code: "620421"}, {name: "会宁县", code: "620422"}, {name: "景泰县", code: "620423"}]
        }, {
            name: "天水市",
            code: "620500",
            sub: [{name: "市辖区", code: "620501"}, {name: "秦州区", code: "620502"}, {
                name: "麦积区",
                code: "620503"
            }, {name: "清水县", code: "620521"}, {name: "秦安县", code: "620522"}, {
                name: "甘谷县",
                code: "620523"
            }, {name: "武山县", code: "620524"}, {name: "张家川回族自治县", code: "620525"}]
        }, {
            name: "武威市",
            code: "620600",
            sub: [{name: "市辖区", code: "620601"}, {name: "凉州区", code: "620602"}, {
                name: "民勤县",
                code: "620621"
            }, {name: "古浪县", code: "620622"}, {name: "天祝藏族自治县", code: "620623"}]
        }, {
            name: "张掖市",
            code: "620700",
            sub: [{name: "市辖区", code: "620701"}, {name: "甘州区", code: "620702"}, {
                name: "肃南裕固族自治县",
                code: "620721"
            }, {name: "民乐县", code: "620722"}, {name: "临泽县", code: "620723"}, {
                name: "高台县",
                code: "620724"
            }, {name: "山丹县", code: "620725"}]
        }, {
            name: "平凉市",
            code: "620800",
            sub: [{name: "市辖区", code: "620801"}, {name: "崆峒区", code: "620802"}, {
                name: "泾川县",
                code: "620821"
            }, {name: "灵台县", code: "620822"}, {name: "崇信县", code: "620823"}, {
                name: "华亭县",
                code: "620824"
            }, {name: "庄浪县", code: "620825"}, {name: "静宁县", code: "620826"}]
        }, {
            name: "酒泉市",
            code: "620900",
            sub: [{name: "市辖区", code: "620901"}, {name: "肃州区", code: "620902"}, {
                name: "金塔县",
                code: "620921"
            }, {name: "瓜州县", code: "620922"}, {name: "肃北蒙古族自治县", code: "620923"}, {
                name: "阿克塞哈萨克族自治县",
                code: "620924"
            }, {name: "玉门市", code: "620981"}, {name: "敦煌市", code: "620982"}]
        }, {
            name: "庆阳市",
            code: "621000",
            sub: [{name: "市辖区", code: "621001"}, {name: "西峰区", code: "621002"}, {
                name: "庆城县",
                code: "621021"
            }, {name: "环县", code: "621022"}, {name: "华池县", code: "621023"}, {name: "合水县", code: "621024"}, {
                name: "正宁县",
                code: "621025"
            }, {name: "宁县", code: "621026"}, {name: "镇原县", code: "621027"}]
        }, {
            name: "定西市",
            code: "621100",
            sub: [{name: "市辖区", code: "621101"}, {name: "安定区", code: "621102"}, {
                name: "通渭县",
                code: "621121"
            }, {name: "陇西县", code: "621122"}, {name: "渭源县", code: "621123"}, {name: "临洮县", code: "621124"}, {
                name: "漳县",
                code: "621125"
            }, {name: "岷县", code: "621126"}]
        }, {
            name: "陇南市",
            code: "621200",
            sub: [{name: "市辖区", code: "621201"}, {name: "武都区", code: "621202"}, {
                name: "成县",
                code: "621221"
            }, {name: "文县", code: "621222"}, {name: "宕昌县", code: "621223"}, {name: "康县", code: "621224"}, {
                name: "西和县",
                code: "621225"
            }, {name: "礼县", code: "621226"}, {name: "徽县", code: "621227"}, {name: "两当县", code: "621228"}]
        }, {
            name: "临夏回族自治州",
            code: "622900",
            sub: [{name: "临夏市", code: "622901"}, {name: "临夏县", code: "622921"}, {
                name: "康乐县",
                code: "622922"
            }, {name: "永靖县", code: "622923"}, {name: "广河县", code: "622924"}, {
                name: "和政县",
                code: "622925"
            }, {name: "东乡族自治县", code: "622926"}, {name: "积石山保安族东乡族撒拉族自治县", code: "622927"}]
        }, {
            name: "甘南藏族自治州",
            code: "623000",
            sub: [{name: "合作市", code: "623001"}, {name: "临潭县", code: "623021"}, {
                name: "卓尼县",
                code: "623022"
            }, {name: "舟曲县", code: "623023"}, {name: "迭部县", code: "623024"}, {
                name: "玛曲县",
                code: "623025"
            }, {name: "碌曲县", code: "623026"}, {name: "夏河县", code: "623027"}]
        }]
    },{
        name: "甘肃以外",
        code: "630000",
        sub: [{
            name: "--",
            code: "630100",
            sub: [{name: "市辖区", code: "630101"},{name: "--", code: "630102"}]
        }]
    }]
}($), +function (e) {
    "use strict";
    var n, a = e.rawCitiesData, c = function (e) {
        for (var n = [], a = 0; a < e.length; a++) {
            var c = e[a];
            /^请选择|市辖区/.test(c.name) || n.push(c)
        }
        return n.length ? n : []
    }, o = function (e) {
        return e.sub ? c(e.sub) : [{name: "", code: e.code}]
    }, m = function (e) {
        for (var n = 0; n < a.length; n++) if (a[n].code === e || a[n].name === e) return o(a[n]);
        return []
    }, d = function (e, n) {
        for (var c = 0; c < a.length; c++) if (a[c].code === e || a[c].name === e) for (var m = 0; m < a[c].sub.length; m++) if (a[c].sub[m].code === n || a[c].sub[m].name === n) return o(a[c].sub[m])
    }, u = function (e) {
        var n, c, o = a[0], m = e.split(" ");
        return a.map(function (e) {
            e.name === m[0] && (o = e)
        }), o.sub.map(function (e) {
            e.name === m[1] && (n = e)
        }), m[2] && n.sub.map(function (e) {
            e.name === m[2] && (c = e)
        }), c ? [o.code, n.code, c.code] : [o.code, n.code]
    };
    e.fn.cityPicker = function (c) {
        return c = e.extend({}, n, c), this.each(function () {
            var n = this, s = a.map(function (e) {
                return e.name
            }), b = a.map(function (e) {
                return e.code
            }), t = o(a[0]), r = t.map(function (e) {
                return e.name
            }), i = t.map(function (e) {
                return e.code
            }), l = o(a[0].sub[0]), f = l.map(function (e) {
                return e.name
            }), p = l.map(function (e) {
                return e.code
            }), v = s[0], h = r[0], V = f[0], y = [{displayValues: s, values: b, cssClass: "col-province"}, {
                displayValues: r,
                values: i,
                cssClass: "col-city"
            }];
            c.showDistrict && y.push({values: p, displayValues: f, cssClass: "col-district"});
            var g = {
                cssClass: "city-picker", rotateEffect: !1, formatValue: function (e, n, a) {
                    return a.join(" ")
                }, onChange: function (a, o, u) {
                    var s, b = a.cols[0].displayValue;
                    if (b !== v) {
                        var t = m(b);
                        s = t[0].name;
                        var r = d(b, s);
                        return a.cols[1].replaceValues(t.map(function (e) {
                            return e.code
                        }), t.map(function (e) {
                            return e.name
                        })), c.showDistrict && a.cols[2].replaceValues(r.map(function (e) {
                            return e.code
                        }), r.map(function (e) {
                            return e.name
                        })), v = b, h = s, a.updateValue(), !1
                    }
                    if (c.showDistrict && (s = a.cols[1].displayValue, s !== h)) {
                        var i = d(b, s);
                        return a.cols[2].replaceValues(i.map(function (e) {
                            return e.code
                        }), i.map(function (e) {
                            return e.name
                        })), h = s, a.updateValue(), !1
                    }
                    e(n).attr("data-code", o[o.length - 1]), e(n).attr("data-codes", o.join(",")), c.onChange && c.onChange.call(n, a, o, u)
                }, cols: y
            };
            if (this) {
                var C = e.extend({}, c, g), w = e(this).val();
                if (w || (w = "甘肃省 兰州市 城关区"), v = w.split(" ")[0], h = w.split(" ")[1], V = w.split(" ")[2], w) {
                    if (C.value = u(w), C.value[0]) {
                        var D = m(C.value[0]);
                        C.cols[1].values = D.map(function (e) {
                            return e.code
                        }), C.cols[1].displayValues = D.map(function (e) {
                            return e.name
                        })
                    }
                    if (C.value[1]) {
                        if (c.showDistrict) {
                            var k = d(C.value[0], C.value[1]);
                            C.cols[2].values = k.map(function (e) {
                                return e.code
                            }), C.cols[2].displayValues = k.map(function (e) {
                                return e.name
                            })
                        }
                    } else if (c.showDistrict) {
                        var k = d(C.value[0], C.cols[1].values[0]);
                        C.cols[2].values = k.map(function (e) {
                            return e.code
                        }), C.cols[2].displayValues = k.map(function (e) {
                            return e.name
                        })
                    }
                }
                e(this).picker(C)
            }
        })
    }, n = e.fn.cityPicker.prototype.defaults = {showDistrict: !0}
}($);