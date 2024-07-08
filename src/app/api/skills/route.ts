import dbConnection from '@/lib/db_connection';
import { NextRequest, NextResponse } from 'next/server';

import Skills from '@/schemas/skills_and_tech';

interface Skill {
  name: string;
  category: string;
}

export async function POST(req: NextRequest) {
  const { name }: { name: Skill[] | Skill } = await req.json();
  console.log(name);

  try {
    await dbConnection();

    if (!name) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (Array.isArray(name)) {
      await Promise.all(
        name.map(async (skill: Skill) => {
          const skillExists = await Skills.findOne({ name: skill.name });
          if (!skillExists) {
            const newSkill = new Skills({
              name: skill.name,
              category: skill.category,
            });
            await newSkill.save();
          }
        })
      );
      return NextResponse.json(
        { message: 'Skills created successfully' },
        { status: 200 }
      );
    } else {
      const skillExists = await Skills.findOne({
        name: name.name,
        category: name.category,
      });
      if (!skillExists) {
        const newSkill = new Skills({
          name: name.name,
          category: name.category,
        });
        await newSkill.save();
        return NextResponse.json(
          { message: 'Skill created successfully', newSkill },
          { status: 200 }
        );
      } else {
        return NextResponse.json(
          { error: 'Skill already exists' },
          { status: 400 }
        );
      }
    }
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: 'Failed to create skills' },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    await dbConnection();
    const skills = await Skills.find().select('-__v');
    return NextResponse.json(skills, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: 'Failed to fetch skills' },
      { status: 500 }
    );
  }
}
