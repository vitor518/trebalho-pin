/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package controller;

import java.sql.ResultSet;
import model.Banco;

/**
 *
 * @author aluno
 */
public class ProdutoDAO {
     public ResultSet listar() throws Exception { // devolve uma tabela
        Banco bb;

        try {
            bb = new Banco();
            bb.comando = Banco.conexao.prepareStatement("Select codigo,descricao,preco,coddep,qtde,imagem from produto");
            //    bb.comando.setString(1, nome);
            bb.tabela = bb.comando.executeQuery();
            Banco.conexao.close();
            return (bb.tabela);
        } catch (Exception ex) {
            throw new Exception("Erro ao consultar o banco: " + ex.getMessage());
        }

    }
}
