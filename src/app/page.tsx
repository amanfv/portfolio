import { Bullet, BulletList, SubBullet, SubList } from "@/components/Bullets";
import UnderlineLink from "@/components/UnderlineLink";

/**
 * about page — edit the bullets below.
 * <Bullet> = top-level ◆ item, <SubList>/<SubBullet> = indented ↳ items.
 */
export default function Home() {
  return (
    <BulletList>
      <Bullet>
        Computer Engineering{" "}
        <UnderlineLink href="https://www.ece.utoronto.ca/" external className="ml-1 font-normal">
          University of Toronto
        </UnderlineLink>
        <SubList>
          <SubBullet>
            specializing in high-performance computing &amp; distributed systems
          </SubBullet>
        </SubList>
      </Bullet>


      <Bullet>
        <em className="font-normal italic text-stone-700 dark:text-stone-300">
          what i&apos;ve been building:
        </em>
        <SubList>

          <SubBullet>
            built a low-latency {" "}
            <UnderlineLink href="https://github.com/amanfv/matching-engine" external className="font-normal">
            limit order book & matching engine
            </UnderlineLink>{" "}
              in C++
          </SubBullet>

          <SubBullet>
            built an optimized {" "}
            <UnderlineLink href="https://github.com/amanfv/allocator" external className="font-normal">
              dynamic memory allocator
            </UnderlineLink>{" "}
              in C
          </SubBullet>
                   
          <SubBullet>
            built {" "}
            <UnderlineLink href="https://vvisualize.app/" external className="font-normal">
              visualize
            </UnderlineLink>{" "}
              implementing an AI agent pipeline to compose visualizations
          </SubBullet>

        </SubList>
      </Bullet>

      <Bullet>
        <em className="font-normal italic text-stone-700 dark:text-stone-300">previously:</em>
        <SubList>
          <SubBullet>
            founded{" "}
            <UnderlineLink href="https://github.com/amanfv/euphoric-posters" external className="font-normal">
              Euphoric Posters
            </UnderlineLink>{" "}
            ($5K+ in revenue, 200+ orders, 25K+ visits)
          </SubBullet>

          <SubBullet>
            creator {" "}
            <UnderlineLink href="https://www.tiktok.com/@amanfv" external className="font-normal">
              TikTok
            </UnderlineLink>{" "}
            (140K+ followers, 4M+ likes, & 20M+ views)
          </SubBullet>

          <SubBullet>
          competitive fortnite (2nd, 8th, 16th, & more across various NA tournaments)
          </SubBullet>
        </SubList>
      </Bullet>
    </BulletList>
  );
}
