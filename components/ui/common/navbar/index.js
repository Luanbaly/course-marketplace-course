import { useWeb3 } from "@components/providers"
import Link from "next/link"
import { Button } from "@components/ui/common"
import { useAccount } from "@components/hooks/web3"
import { useRouter } from "next/router"
import ActiveLink from "../link"

export default function Navbar() {
    const { connect, isLoading, requireInstall } = useWeb3()
    const { account } = useAccount()
    const { pathname } = useRouter()

    return (
        <section>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav className="relative" aria-label="Global">
                <div className="flex justify-between center">
                  <div>
                    <ActiveLink href="/" >
                      <a
                      className={` font-medium text-gray-500 hover:text-yellow-300 p-5 m-5 text-3xl `}>
                         Home
                      </a>
                    </ActiveLink>
                    <ActiveLink href="/marketplace" >
                      <a
                       className="font-medium text-gray-500 hover:text-emerald-400 m-7  text-3xl">
                         Marketplace
                      </a>
                    </ActiveLink>
                  <ActiveLink href="/blogs" >
                      <a
                       className="font-medium text-gray-500 hover:text-cyan-400 m-4 p-5 text-3xl">
                         Blogs
                      </a>
                    </ActiveLink>     
                  </div>
                <div>               
                    <ActiveLink href="/wishlist" >
                      <a
                       className="font-medium text-gray-500 hover:text-rose-300 p-4 m-3 text-lg">
                         Wishlist
                      </a>
                  </ActiveLink>  
                  { isLoading ?
                     <Button
                     disabled={true}
                     onClick={connect}>
                       Loading... 
                       </Button> : 
                       account.data ?
                       <Button 
                       hoverable={false}
                       className="bg-green-400 m-2">
                         Hi There {account.isAdmin && "Admin"}
                         </Button> :
                         requireInstall ?
                         <Button
                         onClick={() => window.open("https://metamask.io/download.html", "_blank")}
                         className="bg-red-500">
                           Install Metamask 
                          </Button> :
                       <Button
                       onClick={connect}>
                         Connect 
                         </Button>
                        }
                    </div>
                </div>
              </nav>
            </div>
            { account.data &&
            !pathname.includes("/marketplace") &&
            <div className="flex justify-end pt-1 sm:px-6 lg:px-8">
              <div className="text-stone-50 bg-sky-500 rounded-md p-5">
              {account.data}
              </div>
            </div>
          }
          </section>
    )
  }
  