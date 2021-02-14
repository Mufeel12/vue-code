export default {
    transform(data) {
        return {
            questionCount: data.question_count || 0,
            pointsReceived: data.points_received || 0,
            correctQuestions: data.correct_questions || 0,
            totalQuestions: data.total_questions || 0,
            testPassed: Boolean(data.test_passed),
            quizName: data.name || '',
        }
    },
}
