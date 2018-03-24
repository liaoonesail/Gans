package com.lanzhou.entity;

public class Goods {
	private Integer id;
	private Integer type_next_next_id;//商品类别ID
	private Integer type_next_id;//商品类别上级ID
	private Integer type_id;//商品类别上上级ID
	private String goods_num;//商品编号
	private String goods_name;//商品名称
	private Integer shop_id;//店铺id
	private double cost_price;//市场价
	private double price;//售价
	private Integer amount;//库存
	private Integer sort;//排序
	private Integer goods_type;//商品类别（实物、虚拟）（1，2）
	private String goods_describe;//推荐理由
	private String goods_brand;//商品品牌
	private String picture_address;//商品图片地址
	private Integer mould_id;//模板id
	private String goods_details;//商品详情
	private Integer shangjia;//是否上架 0否 1是
	private Integer baoyou;//是否包邮 0否 1是
	private Integer tuijian;//是否推荐 0否 1是
	private Integer activity_id;//活动ID
	private Integer area_id;//区域ID
	private double freight;//运费
	private String pay_url;//善融支付链接
	private Integer limit_num;//购买限制
	private int hot;//商品热度（排序）
	private String remarks1;//商品备注1
	private String remarks2;//商品备注2
	

	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public Integer getType_next_next_id() {
		return type_next_next_id;
	}


	public void setType_next_next_id(Integer type_next_next_id) {
		this.type_next_next_id = type_next_next_id;
	}


	public Integer getType_next_id() {
		return type_next_id;
	}


	public void setType_next_id(Integer type_next_id) {
		this.type_next_id = type_next_id;
	}


	public Integer getType_id() {
		return type_id;
	}


	public void setType_id(Integer type_id) {
		this.type_id = type_id;
	}


	public String getGoods_num() {
		return goods_num;
	}


	public void setGoods_num(String goods_num) {
		this.goods_num = goods_num;
	}


	public String getGoods_name() {
		return goods_name;
	}


	public void setGoods_name(String goods_name) {
		this.goods_name = goods_name;
	}


	public Integer getShop_id() {
		return shop_id;
	}


	public void setShop_id(Integer shop_id) {
		this.shop_id = shop_id;
	}


	public double getCost_price() {
		return cost_price;
	}


	public void setCost_price(double cost_price) {
		this.cost_price = cost_price;
	}


	public double getPrice() {
		return price;
	}


	public void setPrice(double price) {
		this.price = price;
	}


	public Integer getAmount() {
		return amount;
	}


	public void setAmount(Integer amount) {
		this.amount = amount;
	}


	public Integer getSort() {
		return sort;
	}


	public void setSort(Integer sort) {
		this.sort = sort;
	}


	public Integer getGoods_type() {
		return goods_type;
	}


	public void setGoods_type(Integer goods_type) {
		this.goods_type = goods_type;
	}


	public String getGoods_describe() {
		return goods_describe;
	}


	public void setGoods_describe(String goods_describe) {
		this.goods_describe = goods_describe;
	}


	public String getGoods_brand() {
		return goods_brand;
	}


	public void setGoods_brand(String goods_brand) {
		this.goods_brand = goods_brand;
	}


	public String getPicture_address() {
		return picture_address;
	}


	public void setPicture_address(String picture_address) {
		this.picture_address = picture_address;
	}


	public Integer getMould_id() {
		return mould_id;
	}


	public void setMould_id(Integer mould_id) {
		this.mould_id = mould_id;
	}


	public String getGoods_details() {
		return goods_details;
	}


	public void setGoods_details(String goods_details) {
		this.goods_details = goods_details;
	}


	public Integer getShangjia() {
		return shangjia;
	}


	public void setShangjia(Integer shangjia) {
		this.shangjia = shangjia;
	}


	public Integer getBaoyou() {
		return baoyou;
	}


	public void setBaoyou(Integer baoyou) {
		this.baoyou = baoyou;
	}


	public Integer getTuijian() {
		return tuijian;
	}


	public void setTuijian(Integer tuijian) {
		this.tuijian = tuijian;
	}


	public Integer getActivity_id() {
		return activity_id;
	}


	public void setActivity_id(Integer activity_id) {
		this.activity_id = activity_id;
	}


	public Integer getArea_id() {
		return area_id;
	}


	public void setArea_id(Integer area_id) {
		this.area_id = area_id;
	}


	public double getFreight() {
		return freight;
	}


	public void setFreight(double freight) {
		this.freight = freight;
	}


	public String getPay_url() {
		return pay_url;
	}


	public void setPay_url(String pay_url) {
		this.pay_url = pay_url;
	}


	public Integer getLimit_num() {
		return limit_num;
	}


	public void setLimit_num(Integer limit_num) {
		this.limit_num = limit_num;
	}
	

	public int getHot() {
		return hot;
	}


	public void setHot(int hot) {
		this.hot = hot;
	}

	public String getRemarks1() {
		return remarks1;
	}

	public void setRemarks1(String remarks1) {
		this.remarks1 = remarks1;
	}

	public String getRemarks2() {
		return remarks2;
	}

	public void setRemarks2(String remarks2) {
		this.remarks2 = remarks2;
	}

	public Goods(Integer id, Integer type_next_next_id, Integer type_next_id, Integer type_id, String goods_num, String goods_name, Integer shop_id, double cost_price, double price, Integer amount, Integer sort, Integer goods_type, String goods_describe, String goods_brand, String picture_address, Integer mould_id, String goods_details, Integer shangjia, Integer baoyou, Integer tuijian, Integer activity_id, Integer area_id, double freight, String pay_url, Integer limit_num, int hot, String remarks1, String remarks2) {
		this.id = id;
		this.type_next_next_id = type_next_next_id;
		this.type_next_id = type_next_id;
		this.type_id = type_id;
		this.goods_num = goods_num;
		this.goods_name = goods_name;
		this.shop_id = shop_id;
		this.cost_price = cost_price;
		this.price = price;
		this.amount = amount;
		this.sort = sort;
		this.goods_type = goods_type;
		this.goods_describe = goods_describe;
		this.goods_brand = goods_brand;
		this.picture_address = picture_address;
		this.mould_id = mould_id;
		this.goods_details = goods_details;
		this.shangjia = shangjia;
		this.baoyou = baoyou;
		this.tuijian = tuijian;
		this.activity_id = activity_id;
		this.area_id = area_id;
		this.freight = freight;
		this.pay_url = pay_url;
		this.limit_num = limit_num;
		this.hot = hot;
		this.remarks1 = remarks1;
		this.remarks2 = remarks2;
	}

	public Goods(Integer type_next_next_id, Integer type_next_id, Integer type_id, String goods_num, String goods_name, Integer shop_id, double cost_price, double price, Integer amount, Integer sort, Integer goods_type, String goods_describe, String goods_brand, String picture_address, Integer mould_id, String goods_details, Integer shangjia, Integer baoyou, Integer tuijian, Integer activity_id, Integer area_id, double freight, String pay_url, Integer limit_num, int hot, String remarks1, String remarks2) {
		this.type_next_next_id = type_next_next_id;
		this.type_next_id = type_next_id;
		this.type_id = type_id;
		this.goods_num = goods_num;
		this.goods_name = goods_name;
		this.shop_id = shop_id;
		this.cost_price = cost_price;
		this.price = price;
		this.amount = amount;
		this.sort = sort;
		this.goods_type = goods_type;
		this.goods_describe = goods_describe;
		this.goods_brand = goods_brand;
		this.picture_address = picture_address;
		this.mould_id = mould_id;
		this.goods_details = goods_details;
		this.shangjia = shangjia;
		this.baoyou = baoyou;
		this.tuijian = tuijian;
		this.activity_id = activity_id;
		this.area_id = area_id;
		this.freight = freight;
		this.pay_url = pay_url;
		this.limit_num = limit_num;
		this.hot = hot;
		this.remarks1 = remarks1;
		this.remarks2 = remarks2;
	}

	public Goods() {
		super();
	}
	

}
