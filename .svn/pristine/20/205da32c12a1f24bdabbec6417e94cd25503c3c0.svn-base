package com.lanzhou.service;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lanzhou.dao.TicketDao;
import com.lanzhou.entity.Ticket;
@Service
@Transactional
public class TicketService {
	@Resource
	private TicketDao dao;
	public void add(Ticket ticket) {
		// TODO Auto-generated method stub
		dao.add(ticket);
	}
	public void delAll() {
		// TODO Auto-generated method stub
		dao.delAll();
	}
	/**
	 * 获取一个有效的定向卷对象
	 * @param i
	 * @return
	 */
	public Ticket getByStatus(int status) {
		// TODO Auto-generated method stub
		return dao.getByStatus(status);
	}
	/**
	 * 修改定向卷信息
	 * @param ticket
	 */
	public void update(Ticket ticket) {
		// TODO Auto-generated method stub
		dao.update(ticket);
	}

}
