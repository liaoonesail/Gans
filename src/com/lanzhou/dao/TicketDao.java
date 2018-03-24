package com.lanzhou.dao;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.lanzhou.entity.Ticket;
@Repository
public class TicketDao {
	@Resource
	private SqlSessionTemplate sm;
	public void add(Ticket ticket) {
		// TODO Auto-generated method stub
		sm.insert("com.lanzhou.entity.Ticket.add", ticket);
	}
	public void delAll() {
		// TODO Auto-generated method stub
		sm.delete("com.lanzhou.entity.Ticket.delAll");
	}
	public Ticket getByStatus(int status) {
		// TODO Auto-generated method stub
		return sm.selectOne("com.lanzhou.entity.Ticket.getByStatus", status);
	}
	public void update(Ticket ticket) {
		// TODO Auto-generated method stub
		sm.update("com.lanzhou.entity.Ticket.update", ticket);
	}

}
