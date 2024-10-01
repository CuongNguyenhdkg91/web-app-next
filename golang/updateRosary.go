package main

import (
	"bufio"
	"encoding/json"
	"fmt"
	"io"
	"os"
	"strings"
)

type product struct {
	Id 		int
	Name 	string
	Stock	int
	Myths	[]string
}

var products []product

func login() bool{
	var username, password string
	fmt.Println("=============Login=============")
	fmt.Print("Username: ")
	fmt.Scan(&username)
	fmt.Print("Password: ")
	fmt.Scan(&password)

	if(username == "admin" && password == "admin"){
		fmt.Println("==========Login Succes==========")
		return true
	} else {
		fmt.Println("Incorrect Username or Password, please re-login!")
		return false
	}
}

func listMenu(){
	fmt.Println("1. Vui")
	fmt.Println("2. Thương")
	fmt.Println("3. Mừng")
	fmt.Println("4. Sáng")
	fmt.Println("9. Show All")
	fmt.Println("0. Exit")
	fmt.Print("Enter your choice: ")	
}

func menu() {
	var choose int
	listMenu()
	for {
		fmt.Scan(&choose)
		if choose == 0 {
			fmt.Println("Thank You, exiting.....")
			break
		} else {
			switch choose {
			case 9:
				showListProduct(products)
				fmt.Println("press 'Enter' to back to menu....")
				bufio.NewReader(os.Stdin).ReadBytes('\n')
				listMenu()
			case 1, 2, 3, 4:
				var Id int
				Id = choose
				fmt.Println("\nInfo for Product with ID ", Id)
				showProductById(Id, products,-1)
				for updateProductById(Id){
				}
				// fmt.Println("press 'Enter' to back to menu....")
				// bufio.NewReader(os.Stdin).ReadBytes('\n')
				listMenu()
			default:
				fmt.Println("Re-enter your choice!")
				listMenu()
			}
		}
	}			
}

/*** Start of CRUD Function***/

func showListProduct(products []product) {
	// Untuk setiap product p dengan index i pada array products
	for _, p := range products {
		fmt.Println("ID	:", p.Id)
		fmt.Println("Name	:", p.Name)
		fmt.Println("Stock	:", p.Stock)
		fmt.Println()
	}
}


func showProductById(Id int, products []product, index int) {
	Red := "\033[31m"
	Reset := "\033[0m"
	for _, p := range products {
		if p.Id == Id {
			fmt.Println("ID:	", p.Id)
			fmt.Println("Name:	", p.Name)
			fmt.Println("Stock:	",p.Stock)
			fmt.Println("Myths:	")
			for j:=0; j<len(p.Myths); j++{
				writing:=p.Myths[j]
				if j==index {
					writing=Red+p.Myths[j]+Reset
				}
				fmt.Println("Thứ",(j+1),":	",writing)
			}
			break
		}
	}
}


/* func deleteProductById(Id int, products *[]product) {
	for i, p := range *products {
		if p.Id == Id {
			*products = append((*products)[:i], (*products)[i+1:]...)
		}
	}
} */


func updateProductById(Id int) bool {
	var choose int
	index:=0
	fmt.Println("1-5 to edit, others to back: ")
	fmt.Scan(&choose)
	if choose >5 || choose <1 {
		return false
	} else {
/* 		fmt.Print("Enter to move down, 0 to back, 1 to edit, : ")
		for{
			bufio.NewReader(os.Stdin).ReadBytes('\n')
			index += 1
			if index == 5 {break}
			showProductById(Id, *products, index)
		} */
		index = choose - 1
		showProductById(Id, products, index)

		fmt.Print("Enter myth : ")
		consoleReader := bufio.NewReader(os.Stdin)
		var myth string
		for {
			myth1, _ := consoleReader.ReadString('\n') //accept the whitespace? \n is newline ?
			if myth1 > "1"{
				myth = strings.Trim(myth1,"\r\n")
				break
			}
		}

		var Myths []string
		for i, p := range products {
			// fmt.Println(p.Id, Id)
			if p.Id == Id {
				Myths = p.Myths
				Myths[index] = myth
				products[i] = product{Id, p.Name, p.Stock, Myths}
			}
		}
		showProductById(Id, products, index)

		file, _ := json.MarshalIndent(products,"", " ")
		_ = os.WriteFile("test.json",file,0644)
		return true
	}
	
	// updateProductById(Id, &products)
}

/*** End of CRUD Function ***/

func DitenunApp() {
	// for !login() {
	// 	login()
	// 	break
	// }

	// Example data
	Myth00 := []string{"ngắm 1", "ngắm 2", "ngắm 3", "ngắm 4", "ngắm 5"}
	products = append(products, product{Id : 1, Name : "vui", Stock: 5, Myths: Myth00})
	products = append(products, product{Id : 2, Name : "thương", Stock: 5, Myths: Myth00})
	products = append(products, product{Id : 3, Name : "mừng", Stock: 5, Myths: Myth00})
	products = append(products, product{Id : 4, Name : "sáng", Stock: 5, Myths: Myth00})

	var result []product
	jsonFile, _ := os.Open("test.json") 
	fmt.Println("read json file")
	byteValue, _ := io.ReadAll(jsonFile)
	json.Unmarshal(byteValue,&result)
	// fmt.Println(result[0].Myths[0])
	
	products = result

	menu()
}

func main() {
	DitenunApp()
}







func updateProductByIdasPointer(Id int, products *[]product) {
	index:=0
	var myth string
	var Myths []string
	for i, p := range *products {
		fmt.Println(p.Id, Id)
		if p.Id == Id {
			Myths = p.Myths
			Myths[index] = myth
			(*products)[i] = product{Id, p.Name, p.Stock, Myths}
		}
	}
	showProductById(Id, *products, index)

	file, _ := json.MarshalIndent(products,"", " ")
	_ = os.WriteFile("test.json",file,0644)
	
	// updateProductById(Id, &products)
}